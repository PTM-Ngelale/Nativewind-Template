import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

const MenuNavigation = [
  {
    name: "My Profile",
    link: "/profile",
    icon: <TabBarIcon name={"person"} color={"#192655"} />,
  },
  {
    name: "Settings",
    link: "/profile",
    icon: <TabBarIcon name={"settings"} color={"#192655"} />,
  },
  {
    name: "Logout",
    link: "/profile",
    icon: <TabBarIcon name={"log-out"} color={"#192655"} />,
  },
];

const Menu = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="h-full relative bg-white">
        <View className="w-full bg-[#192655] px-4 py-4">
          <Image
            resizeMode="contain"
            className="h-[54px] w-[54px]"
            source={require("../../../assets/images/Alarmix_logo.png")}
          />
        </View>
        <View className="px-4 py-4">
          <FlatList
            data={MenuNavigation}
            keyExtractor={(item) => item.name}
            className=""
            renderItem={({ item }) => (
              <TouchableOpacity className="py-4 last:border-b-none border-b border-b-[#D9D9D9] flex flex-row items-center space-x-4">
                {item.icon}
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
