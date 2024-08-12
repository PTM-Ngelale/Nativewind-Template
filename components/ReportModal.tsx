import { useUser } from "@/context/userContext";
import {
  GetUserEmailDocument,
  useCreateAlertMutation,
} from "@/generated/graphql";
import { ApolloError, useQuery } from "@apollo/client";
import React, { Dispatch, SetStateAction } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import CustomButton from "./ui/CustomButton";

interface Props {
  emergencyModal: boolean;
  setEmergencyModal: Dispatch<SetStateAction<boolean>>;
  selectedEmergency: string;
  setSelectedEmergency: Dispatch<SetStateAction<string>>;
  reportModal: boolean;
  setReportModal: Dispatch<SetStateAction<boolean>>;
  displayCurrentAddress: string;
}

const ReportModal = ({
  setEmergencyModal,
  selectedEmergency,
  setSelectedEmergency,
  reportModal,
  setReportModal,
  displayCurrentAddress
}: Props) => {
  const { data, } = useQuery(GetUserEmailDocument);
  const { getCurrentLocation, initialRegion } = useUser();


  const userData = data?.getCurrentUser;

  const [createAlert, { loading }] = useCreateAlertMutation({
    onCompleted: () => {
      setReportModal(false);
      setEmergencyModal(true);
      setSelectedEmergency("");
      Toast.show({ type: "success", text1: "Report has been escalated!" });
    },

    onError: (error: ApolloError) => {
      Toast.show({ type: "error", text1: error.message });
    },
  });

  const emergencies = [
    {
      id: 0,
      name: "Fire",
    },
    {
      id: 1,
      name: "Robbery",
    },
    {
      id: 2,
      name: "Accident",
    },
    {
      id: 3,
      name: "Health",
    },
    {
      id: 4,
      name: "Wild life",
    },
    {
      id: 5,
      name: "Severe Weather",
    },
    {
      id: 6,
      name: "Utility Failure",
    },
    {
      id: 7,
      name: "Missing Person",
    },
    {
      id: 8,
      name: "Others",
    },
  ];
  const handleClick = async () => {
    if (selectedEmergency && selectedEmergency.length > 0) {
      try {
        // Ensure the current location is up-to-date
        getCurrentLocation();

        await createAlert({
          variables: {
            data: {
              emergency: selectedEmergency,
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude,
              address: displayCurrentAddress,
              creator: {
                connect: {
                  id: userData.id,
                },
              },
            },
          },
        });

        setReportModal(false);
        setEmergencyModal(true);
      } catch (error) {
        console.error("Error creating alert:", error);
        // Handle error (e.g., show a toast or alert)
      }
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={reportModal}
        onRequestClose={() => {
          setReportModal(!reportModal);
        }}
      >
        <SafeAreaView>
          <View className="mt-10">
            <ScrollView className="h-full w-full bg-white">
              <View className="w-full px-6">
                <View className="mt-10">
                  <Text className="text-[#192655] font-bold text-base">
                    What Kind of Emergency?
                  </Text>
                  <Text className="text-[#D22121]">
                    Please select an Emergency
                  </Text>
                </View>

                <View className="gap-y-2 mt-6">
                  {emergencies.map((type) => (
                    <TouchableOpacity
                      onPress={() => setSelectedEmergency(type.name)}
                      activeOpacity={0.8}
                      key={type.id}
                      className={`border border-[#19265580] p-4 rounded-lg ${selectedEmergency === type.name && "border-[#0090FA]"
                        }`}
                    >
                      <Text
                        className={`text-[#6B7280] text-sm ${selectedEmergency === type.name &&
                          "text-[#0090FA] font-bold"
                          }`}
                      >
                        {type.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <View className="mt-[15%]">
                  <CustomButton
                    title="Submit"
                    textStyle="text-white"
                    customStyle="bg-[#192655]"
                    onPress={handleClick}
                    isLoading={loading}
                  />
                </View>
                {/* <TouchableOpacity
                  onPress={handleClick}
                  activeOpacity={0.8}
                  className="mt-[15%] w-full items-center border bg-[#192655] py-4 rounded-xl "
                >
                  <Text className="text-white text-sm">Submit</Text>
                </TouchableOpacity> */}
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default ReportModal;

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
