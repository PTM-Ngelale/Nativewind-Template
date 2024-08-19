import {
  useAlertCreatedSubscription,
  useListUserAlertsQuery,
} from "@/generated/graphql";
import { GetUserBasicInfoQuery } from "@/graphql/query";
import { useQuery } from "@apollo/client";
import { formatDistanceToNow } from "date-fns";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const notifications = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { data } = useQuery(GetUserBasicInfoQuery);
  const { id } = data?.getCurrentUser || {};
  const {
    data: listAlerts,
    loading: alertLoading,
    refetch: refetchList,
  } = useListUserAlertsQuery({
    skip: activeTab !== "all",
  });
  const { data: subscriptionData } = useAlertCreatedSubscription();
  const {
    data: listUserAlerts,
    loading: userAlertLoading,
    error: alertError,
  } = useListUserAlertsQuery({
    variables: {
      createdByOnly: true,
    },
    skip: activeTab === "all",
  });

  const allAlerts = listAlerts?.listAlerts;
  const myAlerts = listUserAlerts?.listAlerts;

  console.log(id, alertError);
  const toggleTab = (tab: any) => {
    setActiveTab(tab);
  };

  const alertsToDisplay = activeTab === "all" ? allAlerts : myAlerts;

  useEffect(() => {
    if (subscriptionData) {
      refetchList();
    }
  }, [subscriptionData]);

  const truncateText = (text: string, maxLength: number): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

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
              {alertLoading || userAlertLoading
                ? Array.from({ length: 6 }, (_, _i) => (
                    <View key={_i}>
                      <View className="flex items-center flex-row mt-4 bg-white p-3 border border-[#192655] border-opacity-50 rounded-xl">
                        <View className="w-[37px] h-[40px] bg-gray-200"></View>
                        <View className="ml-4 text-sm font-bold h-[30px] w-[70%] bg-gray-200">
                          <View className="text-sm bg-gray-200"></View>
                        </View>
                      </View>
                    </View>
                  ))
                : alertsToDisplay?.map((alert, index) => (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() =>
                        router.push({
                          pathname: `/emergency-group/[id]`,
                          params: {
                            id: alert.id,
                            emergency: alert.emergency,
                            latitude: alert.latitude,
                            longitude: alert.longitude,
                            address: alert.address,
                            createdAt: alert.createdAt,
                            userId: id,
                          },
                        })
                      }
                      key={index}
                      className="flex items-center flex-row mt-4 bg-white p-3 border border-[#192655] border-opacity-50 rounded-xl"
                    >
                      <Image
                        source={require("../../assets/images/Alert.png")}
                        className="w-[37px] h-[40px]"
                        resizeMode="contain"
                      />
                      <View className="relative ml-4 w-[92%]">
                        <View className="flex-row w-[92%] justify-between">
                          <Text className="text-md font-extrabold">
                            {truncateText(alert.emergency, 20)}
                          </Text>
                          <Text className="absolute right-0 text-xs">
                            {formatDistanceToNow(new Date(alert.createdAt), {
                              addSuffix: true,
                              includeSeconds: true,
                            }).replace("about ", "")}
                          </Text>
                        </View>
                        <Text className="text-sm w-full break-words flex-shrink max-w-[92%] flex-wrap line-clamp-2">
                          Location: {alert.address}
                        </Text>
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
