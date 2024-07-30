import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackArrow from "@/components/ui/BackArrow";
import CustomTextInput from "@/components/ui/CustomInput";
import CustomButton from "@/components/ui/CustomButton";
import ImageUpload from "@/components/ui/ImageUpload";
import React from "react";
import { useRouter } from "expo-router";

const Profile = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <KeyboardAvoidingView
      className="flex-1 flex items-start"
      behavior={"position"}
      keyboardVerticalOffset={-100}
    >
      <SafeAreaView className="h-full bg-white">
        <ScrollView className="h-full px-4">
          <BackArrow label="My Profile" />
          <ImageUpload />
          <View className="flex space-y-4 my-6">
            <CustomTextInput
              placeholder="First Name"
              placeholderTextColor="#000"
            />
            <CustomTextInput
              placeholder="Last Name"
              placeholderTextColor="#000"
              borderStyle="mt-4"
            />
            <Text className="text-[#192655] font-normal">
              Additional information
            </Text>
            <CustomTextInput
              placeholder="First Name"
              placeholderTextColor="#000"
              borderStyle="mt-4"
            />
            <CustomTextInput
              placeholder="Last Name"
              placeholderTextColor="#000"
              borderStyle="mt-4"
            />
          </View>
          <CustomButton
            title="Update Profile"
            textStyle="text-white"
            customStyle="bg-[#192655]"
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
