import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

import * as Location from "expo-location";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { Alert, Platform } from "react-native";

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
  expoPushToken: string;
  deviceInfo: {
    deviceId: string;
    deviceName: string;
    deviceModel: string;
  };
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
  const [expoPushToken, setExpoPushToken] = useState("");
  const [deviceInfo, setDeviceInfo] = useState({
    deviceId: "",
    deviceName: "",
    deviceModel: "",
  });
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then((token) => setExpoPushToken(token ?? ""))
      .catch((error: any) => setExpoPushToken(`${error}`));

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      notificationListener.current &&
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    checkIfLocationEnabled();
    getDeviceInfo();
  }, []);

  const checkIfLocationEnabled = async () => {
    const enabled = await Location.hasServicesEnabledAsync();
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
    const { status } = await Location.requestForegroundPermissionsAsync();
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

      setInitialRegion((prevRegion) => {
        if (
          prevRegion.latitude === latitude &&
          prevRegion.longitude === longitude
        ) {
          return prevRegion;
        }
        return {
          latitude,
          longitude,
          latitudeDelta: 0.004757,
          longitudeDelta: 0.006866,
        };
      });

      const response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (response.length > 0) {
        const { name, region, country } = response[0];
        console.log(response[0]);
        const address = `${name} ${region} ${country}`;
        setDisplayCurrentAddress((prevAddress) => {
          if (prevAddress === address) {
            return prevAddress;
          }
          return address;
        });
      }
    }
  };

  const requestPermissionAgain = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      getCurrentLocation();
    }
  };

  const handleRegistrationError = (errorMessage: string) => {
    alert(errorMessage);
    throw new Error(errorMessage);
  };

  const registerForPushNotificationsAsync = async () => {
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        handleRegistrationError(
          "Permission not granted to get push token for push notification!"
        );
        return;
      }
      const projectId =
        Constants?.expoConfig?.extra?.eas?.projectId ??
        Constants?.easConfig?.projectId;
      if (!projectId) {
        handleRegistrationError("Project ID not found");
      }
      try {
        const pushTokenString = (
          await Notifications.getExpoPushTokenAsync({
            projectId,
          })
        ).data;
        console.log(pushTokenString);
        return pushTokenString;
      } catch (e: unknown) {
        handleRegistrationError(`${e}`);
      }
    } else {
      handleRegistrationError(
        "Must use physical device for push notifications"
      );
    }
  };

  const getDeviceInfo = async () => {
    const deviceId = Device.osBuildId || "unknown";
    const deviceName = Device.manufacturer || "unknown";
    const deviceModel = Device.modelName || "unknown";

    setDeviceInfo({
      deviceId,
      deviceName,
      deviceModel,
    });
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
        expoPushToken,
        deviceInfo,
      }}
    />
  );
};

export { UserProvider, useUser };
