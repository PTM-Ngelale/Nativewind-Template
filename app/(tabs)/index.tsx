// import Geolocation from "@react-native-community/geolocation";
import EmergencyModal from "@/components/EmergencyModal";
import Onboarding from "@/components/Onboarding";
import { useEmergency } from "@/context/EmergencyContext";
import { router } from "expo-router";
import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
// import GeoLocation

export default function HomeScreen() {
  const [userlocation, setUserLocation] = React.useState();

  const [emergencyModal, setEmergencyModal] = React.useState(false);
  const [onboardingModal, setOnBoardingModal] = React.useState(false);

  const { emergency } = useEmergency();
  console.log("Emergency", emergency);

  useEffect(() => {
    if (emergency) {
      console.log("Emergency detected, opening modal");
      setEmergencyModal(true);
    } else {
      console.log("No emergency detected or empty emergency array");
    }
  }, [emergency]);

  useEffect(() => {
    setOnBoardingModal(true);
  }, []);

  // useEffect(() => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       setUserLocation({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //         latitudeDelta: 0.0922,
  //         longitudeDelta: 0.0421,
  //       });
  //     },
  //     (error) => console.error(error),
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  // }, []);
  return (
    <View className="h-full w-full bg-white">
      <MapView
        showsUserLocation={true}
        followsUserLocation={true}
        style={styles.map}
        initialRegion={userlocation}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker Title"
          description="Marker Description"
        />
      </MapView>
      <View className="h-[20vh] w-[13%] bg-[#00000040] absolute bottom-5 right-5 rounded-full items-center justify-between">
        <TouchableOpacity
          onPress={() => router.push("/(modals)/Report")}
          activeOpacity={0.8}
          className="items-center pt-3 gap-y-2"
        >
          <Image
            source={require("../../assets/images/edit.png")}
            className="w-[40px] h-[40px]"
            resizeMode="contain"
          />
          <Text className="text-xs text-white">Report</Text>
        </TouchableOpacity>

        <View className="w-full h-[2px] bg-[#FFFFFF80]"></View>

        <TouchableOpacity
          activeOpacity={0.8}
          className="pb-4 items-center gap-y-2"
          onPress={() => setEmergencyModal(true)}
        >
          <Image
            source={require("../../assets/images/Sos.png")}
            className="w-[40px] h-[40px]"
            resizeMode="contain"
          />
          <Text className="text-xs text-white">SOS</Text>
        </TouchableOpacity>
      </View>

      <View>
        <EmergencyModal
          emergencyModal={emergencyModal}
          setEmergencyModal={setEmergencyModal}
        />
      </View>

      <View>
        <Onboarding
          onboardingModal={onboardingModal}
          setOnBoardingModal={setOnBoardingModal}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
