import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import CustomButton from "@/components/ui/CustomButton";
import { Href, router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

const MenuNavigation: {
  name: string;
  link: any;
  icon: React.JSX.Element;
}[] = [
    {
      name: "My Profile",
      link: "/profile",
      icon: <TabBarIcon name={"person"} color={"#192655"} />,
    },
    // {
    //   name: "Settings",
    //   link: "/splashscreen",
    //   icon: <TabBarIcon name={"settings"} color={"#192655"} />
    // },
    {
      name: "Logout",
      link: "/(auth)/Login",
      icon: <TabBarIcon name={"log-out"} color={"#192655"} />,
    },
  ];

const Menu = () => {

  const handleLogout = async () => {
    try {
      // Delete the authentication token from SecureStore
      await SecureStore.deleteItemAsync("alarmixToken");

      // Navigate to the login screen
      router.replace("/(auth)/Login" as Href<string>); // Use replace to reset the stack

      // Show a toast message indicating successful logout
      Toast.show({ type: "success", text1: "Logout Successful" });
    } catch (error) {
      // Handle any errors during the logout process
      console.error("Error during logout:", error);
      Toast.show({ type: "error", text1: "Logout failed. Please try again." });
    }
  };

  return (
    <SafeAreaView edges={["top"]} className="bg-white h-full">
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
                onPress={async () => {
                  if (item.name === "Logout") {
                    await handleLogout();
                  } else {
                    // Navigate to the selected menu item
                    router.push(item.link as Href<string>);
                  }
                }}
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
