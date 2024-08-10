import Loading from "@/components/Loading";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Href, router, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface TabIconProps {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({
  icon,
  color,
  name,
  focused,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (!token) {
        router.replace("/(auth)/Login" as Href<string>);
      }
      setIsLoading(false);
      console.log(token)
    };
    fetchToken();
  }, []);

  if (isLoading) return <Loading />;

  return (
      <View className="items-center justify-center gap-2">
        <View
          className={`${focused ? "" : "opacity-0"} w-[36px] bg-[#0090FA] h-1`}
        />
        <TabBarIcon name={icon} color={color} />
        <Text
          style={{ color: color }}
          className={`${focused ? "font-bold" : "font-normal"} text-xs`}
        >
          {name}
        </Text>
      </View>
  );
};

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFFFFF",
          tabBarInactiveTintColor: "#BDBDBD",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#192655",
            height: 100,
            paddingVertical: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"map"}
                color={color}
                name="Home"
                focused={focused}

              />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            title: "Notifications",
            headerShown: true,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"notifications"}
                color={color}
                name="Notifications"
                focused={focused}
                // onPress={() => router.replace("/notifications")}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="(menu)"
          options={{
            title: "Menu",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={"menu"}
                color={color}
                name="Menu"
                focused={focused}
                // onPress={() => router.replace("/(menu)")}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#FFFFFF" style="light" />
    </>
  );
}
