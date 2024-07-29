import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const notifications = () => {
  const notifs = [
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
    {
      id: 5,
      title: "Emergency: Robbery in progress",
      user: "Jane Kameroon",
      distance: "Distance 5km away",
      Location: "Location 4 Baduchum, off Nvigue Close...",
    },
    {
      id: 6,
      title: "Emergency: Robbery in progress",
      user: "Jane Kameroon",
      distance: "Distance 5km away",
      Location: "Location 4 Baduchum, off Nvigue Close...",
    },
  ];
  return (
    <SafeAreaView className="h-full w-full bg-slate-100">
      <View className="px-4">
        <FlatList
          data={notifs}
          style={{}}
          //   contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => router.push(`/emergency-group/${item.id}`)}
              key={index}
              className="flex items-center flex-row gap-x-4 mt-4 bg-white p-3 border border-[#19265580] rounded-xl"
            >
              <Image
                source={require("../../assets/images/Alert.png")}
                className="w-[37px] h-[40px]"
                resizeMode="contain"
              />
              <View>
                <Text>{item.title}</Text>
                <Text>{item.user}</Text>
                <Text className="">{item.distance}</Text>
                <Text className="">{item.Location}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <StatusBar backgroundColor="#000000" style="dark" />
    </SafeAreaView>
  );
};

export default notifications;
