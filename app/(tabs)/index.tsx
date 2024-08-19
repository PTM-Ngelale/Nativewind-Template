import EmergencyModal from "@/components/EmergencyModal";
import Onboarding from "@/components/Onboarding";
import ReportModal from "@/components/ReportModal";
import SosModal from "@/components/SosModal";
import Loading from "@/components/Loading";
import SosLoading from "@/components/SosLoading";
import { useUser } from "@/context/userContext";
import {
  Alert,
  AlertType,
  GetUserEmailDocument,
  useCreateAlertMutation,
  useListAlertsByUserAssociationQuery,
  useListUserAlertsQuery,
} from "@/generated/graphql";
import { ApolloError, useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Circle, Marker, PROVIDER_DEFAULT } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import Toast from "react-native-toast-message";

export default function HomeScreen() {
  const [emergencyModal, setEmergencyModal] = useState(false);
  const [sosModal, setSosModal] = useState(false);
  const [onboardingModal, setOnBoardingModal] = useState(false);
  const [direction, setDirection] = useState(false);
  const [directionOrigin, setDirectionOrigin] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [directionDestination, setDirectionDestination] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [selectedEmergency, setSelectedEmergency] = useState("");
  const [reportModal, setReportModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalLoading, setModalLoading] = useState(false); // Loading state for SOS modal
  const [modalDetails, setModalDetails] = useState(0.0);
  const [emergency, setEmergency] = useState("");
  const [address, setAddress] = useState("");
  const [totalNotified, setTotalNotified] = useState(0);
  const { data } = useQuery(GetUserEmailDocument);
  const userData = data?.getCurrentUser;
  const [chatData, setChatData] = useState<any>(null);

  const [createAlert, { loading: loadingAlerts }] = useCreateAlertMutation({
    onCompleted: (data) => {
      const alert = data.createAlert;
      setReportModal(false);
      setTotalNotified(data.createAlert?.totalNotified || 0);
      setChatData(data.createAlert?.alert);
      setModalLoading(false);
      setSosModal(true);
      Toast.show({ type: "success", text1: "Report has been escalated!" });
    },
    onError: (error: ApolloError) => {
      setModalLoading(false);
      Toast.show({ type: "error", text1: error.message });
    },
  });

  const { initialRegion, displayCurrentAddress, getCurrentLocation } =
    useUser();

  useEffect(() => {
    const fetchLocation = async () => {
      getCurrentLocation();
      setLoading(false);
    };

    fetchLocation();
  }, []);

  const { data: listAlerts } = useListAlertsByUserAssociationQuery();

  const setMarkerDirection = (
    latitude: number,
    longitude: number,
    id: number,
    emergency: string,
    address: string,
    alert: any
  ) => {
    setDirectionOrigin({
      latitude: initialRegion.latitude,
      longitude: initialRegion.longitude,
    });
    setDirectionDestination({
      latitude: latitude,
      longitude: longitude,
    });
    setEmergencyModal(true);
    setModalDetails(id);
    setEmergency(emergency); // Set the emergency detail
    setAddress(address); // Set the address detail
    setChatData(alert);
  };

  const getDirection = () => {
    setDirection(true);
    setEmergencyModal(false);
  };

  const GOOGLE_MAPS_APIKEY = "AIzaSyAarxyzQsNQtOzS0rSr51QGbDSkxJkcwzk";

  if (loading) {
    return <Loading />;
  }

  const handleClick = async () => {
    try {
      // Ensure the current location is up-to-date
      getCurrentLocation();

      setEmergencyModal(false);
      setSelectedEmergency("");
      setModalLoading(true);
      await createAlert({
        variables: {
          data: {
            emergency: "SOS",
            latitude: initialRegion.latitude,
            longitude: initialRegion.longitude,
            type: AlertType.Sos,
            address: displayCurrentAddress,
            creator: {
              connect: {
                id: userData.id,
              },
            },
          },
        },
      });
    } catch (error) {
      setModalLoading(false);
      console.error("Error creating alert:", error);
      // Handle error (e.g., show a toast or alert)
    }
  };

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
        <Circle
          center={initialRegion}
          radius={150}
          strokeWidth={1}
          strokeColor="#0090FA33"
          fillColor="#0090FA33"
        />
        {listAlerts?.listAlertsByUserAssociation.map((circle, i) => {
          const center = {
            latitude: circle.latitude,
            longitude: circle.longitude,
            latitudeDelta: 0.004757,
            longitudeDelta: 0.006866,
          };
          return (
            <Circle
              key={`circle-${circle.id}`}
              center={center}
              radius={150}
              strokeWidth={1}
              strokeColor="#FA000033"
              fillColor="#FA000033"
            />
          );
        })}

        {listAlerts?.listAlertsByUserAssociation.map((marker, i) => (
          <Marker
            key={`marker-${marker.id}`}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            description={marker.emergency}
            image={require("../../assets/images/alert-triangle.png")}
            tappable
            onPress={() =>
              setMarkerDirection(
                marker.latitude,
                marker.longitude,
                marker.latitude,
                marker.emergency,
                marker.address as string,
                marker
              )
            }
          />
        ))}

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
          onPress={() => setReportModal(true)}
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

        <View className="w-full h-[2px] bg-[#FFFFFF80]" />

        <TouchableOpacity
          onPress={() => handleClick()}
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
          selectedEmergency={selectedEmergency}
          getDirection={getDirection}
          direction={direction}
          setDirection={setDirection}
          emergencyModal={emergencyModal}
          setEmergencyModal={setSosModal}
          modalDetails={modalDetails}
          emergency={emergency}
          address={address}
          alertData={chatData}
        />
      </View>

      <View>
        <Onboarding
          onboardingModal={onboardingModal}
          setOnBoardingModal={setOnBoardingModal}
        />
      </View>

      <View>
        {modalLoading ? (
          <SosLoading />
        ) : (
          <SosModal
            alertData={chatData}
            type={selectedEmergency || "SOS"}
            sosModal={sosModal}
            setSosModal={setSosModal}
            totalNotified={totalNotified}
          />
        )}
      </View>

      <View>
        <ReportModal
          emergencyModal={sosModal}
          displayCurrentAddress={displayCurrentAddress}
          setEmergencyModal={setSosModal}
          selectedEmergency={selectedEmergency}
          setSelectedEmergency={setSelectedEmergency}
          reportModal={reportModal}
          setReportModal={setReportModal}
          setTotalNotified={setTotalNotified}
          setChatData={setChatData}
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
