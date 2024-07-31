import EmergencyModal from "@/components/EmergencyModal";
import Onboarding from "@/components/Onboarding";
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
import MapView, { Circle, Marker, PROVIDER_DEFAULT } from "react-native-maps";
import * as Location from "expo-location";
import SosModal from "@/components/SosModal";
import MapViewDirections from "react-native-maps-directions";

export default function HomeScreen() {
  const [emergencyModal, setEmergencyModal] = React.useState(false);
  const [sosModal, setSosModal] = React.useState(false);
  const [onboardingModal, setOnBoardingModal] = React.useState(false);
  const [direction, setDirection] = React.useState(false);
  const [directionOrigin, setDirectionOrigin] = React.useState({
    latitude: 0,
    longitude: 0,
  });
  const [directionDestination, setDirectionDestination] = React.useState({
    latitude: 0,
    longitude: 0,
  });
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Location Loading....."
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });

  const { emergency } = useEmergency();

  useEffect(() => {
    if (emergency) {
      setEmergencyModal(true);
    }
  }, [emergency]);

  useEffect(() => {
    setOnBoardingModal(true);
  }, []);

  useEffect(() => {
    checkIfLocationEnabled();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert("Location not enabled", "Please enable your Location", [
        {
          text: "Cancel",
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
        latitudeDelta: 0.004757,
        longitudeDelta: 0.006866,
      });

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name} ${item.region} ${item.country}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

  const requestPermissionAgain = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      getCurrentLocation();
    }
  };

  const circles = [
    {
      center: initialRegion,
      color: "#0090FA33",
    },
    {
      center: {
        latitude: initialRegion.latitude + 0.00714,
        longitude: initialRegion.longitude + 0.00075,
        latitudeDelta: 0.004757,
        longitudeDelta: 0.006866,
      },
      color: "#FA000033",
    },
  ];

  const getDirection = () => {
    setDirectionOrigin({
      latitude: initialRegion.latitude,
      longitude: initialRegion.longitude,
    });
    setDirectionDestination({
      latitude: initialRegion.latitude + 0.00714,
      longitude: initialRegion.longitude + 0.00075,
    });
    setDirection(true);
    setEmergencyModal(false);
  };
  const GOOGLE_MAPS_APIKEY = "AIzaSyAarxyzQsNQtOzS0rSr51QGbDSkxJkcwzk";

  return (
    <View className="h-full w-full bg-white">
      <MapView
        region={initialRegion}
        showsUserLocation={true}
        // followsUserLocation={true}
        style={styles.map}
        initialRegion={initialRegion}
        provider={PROVIDER_DEFAULT}
      >
        {circles.map((circle, i) => (
          <Circle
            key={i}
            center={circle.center}
            radius={150}
            strokeWidth={1}
            strokeColor={circle.color}
            fillColor={circle.color}
          />
        ))}

        <Marker
          coordinate={{
            latitude: initialRegion.latitude + 0.00714,
            longitude: initialRegion.longitude + 0.00075,
          }}
          title="Location"
          description={displayCurrentAddress}
          image={require("../../assets/images/alert-triangle.png")}
          tappable
          onPress={() => setEmergencyModal(true)}
        ></Marker>
        {direction === true && (
          <MapViewDirections
            origin={directionOrigin}
            destination={directionDestination}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        )}
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
          onPress={() => setSosModal(!sosModal)}
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
          getDirection={getDirection}
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

      <View>
        <SosModal sosModal={sosModal} setSosModal={setSosModal} />
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
