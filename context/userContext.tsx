import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import * as Location from "expo-location";
import { Alert } from "react-native";

type userContextType = {
  displayCurrentAddress: string;
  setDisplayCurrentAddress: Dispatch<SetStateAction<string>>;
  locationServicesEnabled: boolean;
  setLocationServicesEnabled: Dispatch<SetStateAction<boolean>>;
  initialRegion: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
  setInitialRegion: Dispatch<
    SetStateAction<{
      latitude: number;
      longitude: number;
      latitudeDelta: number;
      longitudeDelta: number;
    }>
  >;
  getCurrentLocation: () => void;
  checkIfLocationEnabled: () => void;
  requestPermissionAgain: () => void;
};

const UserContext = createContext<userContextType | undefined>(undefined);

function useUser(): userContextType {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return context;
}

const UserProvider = (props: { children: ReactNode }): ReactElement => {
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

  return (
    <UserContext.Provider
      {...props}
      value={{
        displayCurrentAddress,
        setDisplayCurrentAddress,
        locationServicesEnabled,
        setLocationServicesEnabled,
        initialRegion,
        setInitialRegion,
        checkIfLocationEnabled,
        getCurrentLocation,
        requestPermissionAgain,
      }}
    />
  );
};

export { UserProvider, useUser };
