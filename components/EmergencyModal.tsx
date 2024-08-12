import { useListUserAlertsQuery } from "@/generated/graphql";
import { router } from "expo-router";
import React, { Dispatch, SetStateAction } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

interface Props {
  selectedEmergency: string;
  getDirection: () => void;
  emergencyModal: boolean;
  setEmergencyModal: Dispatch<SetStateAction<boolean>>;
  direction: boolean;
  setDirection: Dispatch<SetStateAction<boolean>>;
  modalDetails: number;
}

const EmergencyModal = ({
  selectedEmergency,
  emergencyModal,
  setEmergencyModal,
  getDirection,
  direction,
  setDirection,
  modalDetails,
}: Props) => {
  const {
    data: listAlerts,
    loading: alertLoading,
    error,
  } = useListUserAlertsQuery({
    variables: {
      where: { latitude: { equals: modalDetails } },
    },
  });

  const emergency = listAlerts?.listAlerts[0];

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={emergencyModal}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setEmergencyModal(!emergencyModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView} className="px-5">
            <View className="px-6 items-center">
              <Image
                source={require("../assets/images/User-img.png")}
                className="h-[120px] w-[120px]"
                resizeMode="contain"
              />
              <View className="flex-row bg-[#D22121] items-center gap-x-1 rounded-xl px-2 py-1 mt-5">
                <Image
                  source={require("../assets/images/Caution.png")}
                  className="h-[24px] w-[24px]"
                  resizeMode="contain"
                />
                <Text className="text-white">
                  {emergency?.emergency || "Robbery"}
                </Text>
              </View>
              <View className="gap-y-1 items-center">
                <Text className="text-base font-bold">Jane Kameroon</Text>
                <Text>5km away</Text>
                <Text className="text-center text-sm text-[#6B7280] max-w-[200px]">
                  {emergency?.address}
                </Text>
              </View>

              <View className="mt-4 flex-row gap-x-4 items-center">
                <TouchableOpacity
                  onPress={() => {
                    router.push("/emergency-group/1");
                    setEmergencyModal(false);
                  }}
                  activeOpacity={0.8}
                  className="bg-[#192655] border px-4 py-[10px] rounded-xl"
                >
                  <Text className="text-white">Join Group</Text>
                </TouchableOpacity>
                {direction ? (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setDirection(false)}
                    className="border border-[#192655] px-4 py-[10px] rounded-xl"
                  >
                    <Text>No Direction</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={getDirection}
                    className="border border-[#192655] px-4 py-[10px] rounded-xl"
                  >
                    <Text>Get Direction</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setEmergencyModal(!emergencyModal)}
              className="absolute top-3 right-3"
            >
              <Image
                source={require("../assets/images/Close.png")}
                className="h-[30px] w-[30px]"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setEmergencyModal(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
    </View>
  );
};

export default EmergencyModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
