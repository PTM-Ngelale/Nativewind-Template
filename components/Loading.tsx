import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function Loading() {
  return (
    <View className="h-full w-full bg-white items-center justify-center">
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Please wait...</Text>
    </View>
  );
}
