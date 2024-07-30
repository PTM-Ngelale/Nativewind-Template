import {
  View,
  Text,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import CustomButton from "@/components/ui/CustomButton";
import React from "react";
import { router } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

const MenuNavigation = [
  {
    name: "My Profile",
    link: "/profile",
    icon: <TabBarIcon name={"person"} color={"#192655"} />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <TabBarIcon name={"settings"} color={"#192655"} />,
  },
  {
    name: "Logout",
    link: "/(tokenValidation)",
    icon: <TabBarIcon name={"log-out"} color={"#192655"} />,
  },
];

const Menu = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="h-full relative">
        <View className="w-full bg-[#192655] px-4 py-4">
          <Image
            resizeMode="contain"
            className="h-[54px] w-[54px]"
            source={require("../../../assets/images/Alarmix_logo.png")}
          />
        </View>
        <View className="px-4">
          <FlatList
            data={MenuNavigation}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ height: "100%" }}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => router.push(item.link)}
                className="py-4 last:border-b-none border-b border-b-[#D9D9D9] flex flex-row items-center space-x-4"
              >
                {item.icon}
                <Text>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View className="w-full absolute bottom-[-450px] px-4 ">
          <CustomButton
            title="Eleme Group"
            textStyle="text-[#F8BD00]"
            customStyle="bg-[#fdf6da] border-[1px] border-solid border-[#F8BD00]"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
