import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackArrow from "@/components/ui/BackArrow";
import CustomTextInput from "@/components/ui/CustomInput";
import CustomButton from "@/components/ui/CustomButton";
import ImageUpload from "@/components/ui/ImageUpload";
import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GetUserBasicInfoQuery } from "@/graphql/query";
import Loading from "@/components/Loading";
import { UPDATE_USER_MUTATION } from "@/graphql/mutations";
import { showToast } from "@/components/ToastComponent";

const Profile = () => {
  const { data, loading, error } = useQuery(GetUserBasicInfoQuery);

  const [updateUser, { loading: userUpdating, error: userUpdateError }] =
    useMutation(UPDATE_USER_MUTATION);

  const {
    firstName: initialFirstName,
    lastName: initialLastName,
    id,
  } = data?.getCurrentUser || {};

  const [firstName, setFirstName] = useState(initialFirstName || "");
  const [lastName, setLastName] = useState(initialLastName || "");
  const [nextOfKinName, setNextOfKinName] = useState("");
  const [nextOfKinContact, setNextOfKinContact] = useState("");

  const handleUpdateProfile = async () => {
    try {
      await updateUser({
        variables: {
          where: { id },
          data: {
            firstName: { set: firstName },
            lastName: { set: lastName },
            profilePhoto: { set: "" },
          },
        },
      });
      showToast("success", "Profile updated successfully");
    } catch (err) {
      showToast("error", "Error updating profile");
    }
  };

  if (loading) return <Loading />;
  if (error || userUpdateError) console.log(error);

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
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
              placeholderTextColor="gray"
            />
            <CustomTextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
              placeholderTextColor="gray"
              borderStyle="mt-4"
            />
            <Text className="text-[#192655] font-normal">
              Additional information
            </Text>
            <CustomTextInput
              value={nextOfKinName}
              onChangeText={setNextOfKinName}
              placeholder="Next of kin Name"
              placeholderTextColor="gray"
              borderStyle="mt-4"
            />
            <CustomTextInput
              value={nextOfKinContact}
              onChangeText={setNextOfKinContact}
              placeholder="Next of Kin Contact"
              placeholderTextColor="gray"
              borderStyle="mt-4"
            />
          </View>
          <CustomButton
            title="Update Profile"
            textStyle="text-white"
            customStyle="bg-[#192655] mb-2"
            onPress={handleUpdateProfile}
            isLoading={loading || userUpdating}
          />
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
