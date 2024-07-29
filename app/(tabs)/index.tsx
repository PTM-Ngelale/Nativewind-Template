// import Geolocation from "@react-native-community/geolocation";
import EmergencyModal from "@/components/EmergencyModal";
import { useEmergency } from "@/context/EmergencyContext";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
// import GeoLocation

export default function HomeScreen() {
  // const [userlocation, setUserLocation] = React.useState();

  const [emergencyModal, setEmergencyModal] = React.useState(false);

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

  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Location Loading....."
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    checkIfLocationEnabled();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert("Location not enabled", "Please enable your Location", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => getCurrentLocation() },
      ]);
    } else {
      setLocationServicesEnabled(enabled);
      getCurrentLocation();
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "Allow the app to use the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => requestPermissionAgain() },
        ]
      );
      return;
    }

    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      setInitialRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      for (let item of response) {
        let address = `${item.name} ${item.region} ${item.country})`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  console.log(displayCurrentAddress)

  const requestPermissionAgain = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      getCurrentLocation();
    } else {
      console.log("Permission denied again");
    }
  };

  return (
    <View className="h-full w-full bg-white">
      <MapView
        showsUserLocation={true}
        followsUserLocation={true}
        style={styles.map}
        initialRegion={initialRegion}
      >
        <Marker
          coordinate={{
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
          }}
          title="Your location"
          description={displayCurrentAddress}
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
