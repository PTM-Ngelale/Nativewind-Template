import { router } from "expo-router";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

interface Props {
  sosModal: boolean;
  setSosModal: Dispatch<SetStateAction<boolean>>;
  totalNotified: number;
  type: string;
  alertData: {
    id: string;
    emergency: string;
    latitude: number;
    longitude: number;
    address: string;
    createdAt: string;
    createdBy: string;
  };
}

const SosModal = ({ sosModal, setSosModal, totalNotified, type, alertData }: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={sosModal}
        onRequestClose={() => {
          setSosModal(!sosModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView} className="px-6">
            <View className="px-10 items-center">
              <Image
                source={require("../assets/images/SOS-2.png")}
                className="h-[182px] w-[182px]"
                resizeMode="contain"
              />
              <View className="flex-row bg-[#D22121] items-center gap-x-1 rounded-xl px-2 py-1 mt-5">
                <Image
                  source={require("../assets/images/Caution.png")}
                  className="h-[24px] w-[24px]"
                  resizeMode="contain"
                />
                <Text className="text-white">{type}</Text>
              </View>
              <View className="gap-y-1 items-center">
                <Text className="text-base font-bold">Emergency Escalated</Text>
                <Text>{totalNotified} People Notified</Text>
              </View>

              <View className="mt-4 items-center">
                <TouchableOpacity
                  onPress={() => {
                    setSosModal(false); // Close the modal
                    router.push({
                      pathname: `/emergency-group/[id]`,
                      params: {
                        id: alertData.id,
                        emergency: alertData.emergency,
                        latitude: alertData.latitude,
                        longitude: alertData.longitude,
                        address: alertData.address,
                        createdAt: alertData.createdAt,
                        userId: alertData.createdBy,
                      },
                    });
                  }}
                  activeOpacity={0.8}
                  className="bg-[#192655] border px-4 py-[10px] rounded-xl"
                >
                  <Text className="text-white">View Chat</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setSosModal(!sosModal)}
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

export default SosModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
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
