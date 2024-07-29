import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

const allAlerts = [
  {
    id: 0,
    title: "Emergency: Robbery in progress",
    user: "Jane Kameroon",
    distance: "Distance 5km away",
    Location: "Location 4 Baduchum, off Nvigue Close...",
  },
  {
    id: 1,
    title: "Emergency: Robbery in progress",
    user: "Jane Kameroon",
    distance: "Distance 5km away",
    Location: "Location 4 Baduchum, off Nvigue Close...",
  },
];

const myAlerts = [
  {
    id: 1,
    title: "Emergency: Robbery in progress",
    user: "Jane Kameroon",
    distance: "Distance 5km away",
    Location: "Location 4 Baduchum, off Nvigue Close...",
  },
  {
    id: 2,
    title: "Emergency: Robbery in progress",
    user: "Jane Kameroon",
    distance: "Distance 5km away",
    Location: "Location 4 Baduchum, off Nvigue Close...",
  },
  {
    id: 3,
    title: "Emergency: Robbery in progress",
    user: "Jane Kameroon",
    distance: "Distance 5km away",
    Location: "Location 4 Baduchum, off Nvigue Close...",
  },
  {
    id: 4,
    title: "Emergency: Robbery in progress",
    user: "Jane Kameroon",
    distance: "Distance 5km away",
    Location: "Location 4 Baduchum, off Nvigue Close...",
  },
];

const notifications = () => {
  const [activeTab, setActiveTab] = useState("all");

  const toggleTab = (tab: any) => {
    setActiveTab(tab);
  };

  const alertsToDisplay = activeTab === "all" ? allAlerts : myAlerts;

  return (
    <SafeAreaView className="h-full w-full bg-slate-100 ">
      <ScrollView>
        <View className="mx-4 py-5">
          <View className="w-full">
            <View className="flex-row justify-between">
              <TouchableOpacity
                onPress={() => toggleTab("all")}
                className={`w-1/2 flex-row justify-center h-[45px] items-center rounded-[8px] ${
                  activeTab === "all" ? "bg-[#192655]" : "bg-white"
                }`}
              >
                <Text
                  className={`${
                    activeTab === "all" ? "text-white" : "text-[#4B5563]"
                  }`}
                >
                  All Alerts
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => toggleTab("my")}
                className={`w-1/2 flex-row justify-center h-[45px] items-center rounded-r-[8px] ${
                  activeTab === "my" ? "bg-[#192655]" : "bg-white"
                }`}
              >
                <Text
                  className={`${
                    activeTab === "my" ? "text-white" : "text-[#4B5563]"
                  }`}
                >
                  My Alerts
                </Text>
              </TouchableOpacity>
            </View>
            <View className="mt-4">
              {alertsToDisplay.map((alert, index) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  key={index}
                  className="flex items-center flex-row mt-4 bg-white p-3 border border-[#19265580] rounded-xl"
                >
                  <Image
                    source={require("../../assets/images/Alert.png")}
                    className="w-[37px] h-[40px]"
                    resizeMode="contain"
                  />
                  <View className="ml-4">
                    <Text className="text-sm font-bold">{alert.title}</Text>
                    <Text className="text-sm">{alert.user}</Text>
                    <Text className="text-sm">{alert.distance}</Text>
                    <Text className="text-sm">{alert.Location}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <StatusBar backgroundColor="#000000" style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default notifications;
