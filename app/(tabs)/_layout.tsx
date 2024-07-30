import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
// import { Colors } from "@/constants/Colors";
// import { useColorScheme } from "@/hooks/useColorScheme";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  name: string;
  focused: boolean;
}) => {
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
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#FFFFFF" style="light" />
    </>
  );
}
