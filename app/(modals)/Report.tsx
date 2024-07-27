import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useEmergency } from "@/context/EmergencyContext";
import { router } from "expo-router";

const Report = () => {
  const { emergency, setEmergency } = useEmergency();

  const [selectedEmergency, setSelectedEmergency] = React.useState("");

  console.log('selected Emergency', selectedEmergency)
  console.log('emergency', emergency)

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

  const handleClick = () => {
    if (selectedEmergency && selectedEmergency.length > 0) {
      setEmergency(selectedEmergency);
      // router.dismiss(1);
      router.replace("/(tabs)");
    }
  };
  return (
    <ScrollView className="h-full w-full bg-white">
      <View className="w-full px-6">
        <View className="mt-10">
          <Text className="text-[#192655] font-bold text-base">
            What Kind of Emergency?
          </Text>
          <Text className="text-[#D22121]">Please select an Emergency</Text>
        </View>

        <View className="gap-y-2 mt-6">
          {emergencies.map((type) => (
            <TouchableOpacity
              onPress={() => setSelectedEmergency(type.name)}
              activeOpacity={0.8}
              key={type.id}
              className={`border border-[#19265580] p-4 rounded-lg ${
                selectedEmergency === type.name && "border-[#0090FA]"
              }`}
            >
              <Text
                className={`text-[#6B7280] text-sm ${
                  selectedEmergency === type.name && "text-[#0090FA] font-bold"
                }`}
              >
                {type.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          onPress={handleClick}
          activeOpacity={0.8}
          className="mt-[15%] w-full items-center border bg-[#192655] py-4 rounded-xl "
        >
          <Text className="text-white text-sm">Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Report;
