import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function SosLoading() {
  return (
    <View className="h-full w-full bg-black/70 items-center justify-center">
      <ActivityIndicator size="large" color="#ffffff" />
      <Text className="text-white">Escalating...</Text>
    </View>
  );
}
