import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { useListAlertsQuery } from "@/generated/graphql";
const notifications = () => {
  const [activeTab, setActiveTab] = useState("all");
  const {
    data: listAlerts,
    loading: alertLoading,
    error,
  } = useListAlertsQuery();
  const allAlerts = listAlerts?.listAlerts;
  const myAlerts: never[] = [];
  // if (loading) {
  //   <Loading />;
  // }
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
              {alertLoading
                ? Array.from({ length: 6 }, (_, _i) => (
                    <View key={_i}>
                      <View className="flex items-center flex-row mt-4 bg-white p-3 border border-[#192655] border-opacity-50 rounded-xl">
                        <View className="w-[37px] h-[40px] bg-gray-200"></View>
                        <View className="ml-4 text-sm font-bold h-[30px] w-[70%] bg-gray-200">
                          <View className="text-sm bg-gray-200"></View>
                          {/* <Text className="text-sm">{alert.user}</Text>
                      <Text className="text-sm">{alert.distance}</Text>
                      <Text className="text-sm">{alert.Location}</Text> */}
                        </View>
                      </View>
                    </View>
                  ))
                : alertsToDisplay?.map((alert, index) => (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() =>
                        router.push(`/emergency-group/${alert.emergency}`)
                      }
                      key={index}
                      className="flex items-center flex-row mt-4 bg-white p-3 border border-[#192655] border-opacity-50 rounded-xl"
                    >
                      <Image
                        source={require("../../assets/images/Alert.png")}
                        className="w-[37px] h-[40px]"
                        resizeMode="contain"
                      />
                      <View className="ml-4">
                        <Text className="text-sm font-bold">
                          {alert.emergency}
                        </Text>
                        <Text className="text-sm">{alert.address}</Text>
                        {/* <Text className="text-sm">{alert.distance}</Text>
                      <Text className="text-sm">{alert.Location}</Text> */}
                      </View>
                    </TouchableOpacity>
                  ))}
            </View>
          </View>
        </View>
        <StatusBar backgroundColor="#000000" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
};
export default notifications;
