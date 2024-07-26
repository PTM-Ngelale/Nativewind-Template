import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackArrow from "@/components/ui/BackArrow";
import ImageUpload from "@/components/ui/ImageUpload";
import React from "react";

const Profile = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="h-full px-4">
        <BackArrow label="My Profile" />
        <ImageUpload />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
