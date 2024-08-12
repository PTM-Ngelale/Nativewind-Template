import Loading from "@/components/Loading";
import { showToast } from "@/components/ToastComponent";
import BackArrow from "@/components/ui/BackArrow";
import CustomButton from "@/components/ui/CustomButton";
import CustomTextInput from "@/components/ui/CustomInput";
import ImageUpload from "@/components/ui/ImageUpload";
import { useUpdateUserMutation } from "@/generated/graphql";
import { GetUserBasicInfoQuery } from "@/graphql/query";
import { ApolloError, useQuery } from "@apollo/client";
import axios from "axios";
import { ImagePickerAsset, ImagePickerResult } from "expo-image-picker";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile: React.FC = () => {
  const { data, loading, error } = useQuery(GetUserBasicInfoQuery);

  const [updateUser, { loading: userUpdating, error: userUpdateError }] =
    useUpdateUserMutation({
      onCompleted: () => {
        showToast("success", "Profile updated successfully");
      },
      onError: (err: ApolloError) => {
        showToast("error", err.message || "Error updating profile");
      },
    });

  const {
    firstName: initialFirstName,
    lastName: initialLastName,
    id,
    profilePhoto,
    nextOfKinName: initialNextOfKinName,
    nextOfKinContact: initalNextOfKinContact,
  } = data?.getCurrentUser || {};

  const [firstName, setFirstName] = useState<string>(initialFirstName || "");
  const [lastName, setLastName] = useState<string>(initialLastName || "");
  const [nextOfKinName, setNextOfKinName] = useState<string>(
    initialNextOfKinName || ""
  );
  const [nextOfKinContact, setNextOfKinContact] = useState<string>(
    initalNextOfKinContact || ""
  );
  const [selectedImage, setSelectedImage] = useState<ImagePickerResult | null>(
    null
  );
  const [isUploading, setIsUploading] = useState<boolean>(false);

  useEffect(() => {
    setFirstName(initialFirstName || "");
    setLastName(initialLastName || "");
    setNextOfKinName(initialNextOfKinName || "");
    setNextOfKinContact(initalNextOfKinContact || "");
  }, [
    initialFirstName,
    initialLastName,
    initalNextOfKinContact,
    initialNextOfKinName,
  ]);

  const handleImageUpload = async (
    image: ImagePickerResult
  ): Promise<string> => {
    try {
      setIsUploading(true);
      const asset: ImagePickerAsset | undefined = image.assets
        ? image.assets[0]
        : undefined;
      if (!asset || !asset.uri || !asset.type || !asset.fileName) {
        throw new Error("No image selected or missing required properties");
      }

      const formData = new FormData();
      formData.append("file", {
        uri: asset.uri,
        type: asset.type,
        name: asset.fileName,
      } as any); // Type assertion to satisfy FormData.append

      const response = await axios.post(
        "https://alarm-saas-backend-y2v2v.ondigitalocean.app/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data.data;
    } catch (error) {
     if (axios.isAxiosError(error)) {
      // If the error is an AxiosError, log the response error
      showToast("error", error.response?.data?.message || error.message);
    } else {
      // For non-Axios errors, log the error message
      showToast("error", (error as Error).message);
    }
    throw error;
    } finally {
      setIsUploading(false);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      let profilePhotoUrl = profilePhoto || "";

      if (selectedImage) {
        // Check if an image is selected
        profilePhotoUrl = await handleImageUpload(selectedImage);
      }

      await updateUser({
        variables: {
          where: { id },
          data: {
            firstName: { set: firstName },
            lastName: { set: lastName },
            profilePhoto: { set: profilePhotoUrl },
            nextOfKinName: { set: nextOfKinName },
            nextOfKinContact: { set: nextOfKinContact },
          },
        },
      });
    } catch (err) {
      showToast("error", "Error updating profile", err);
    }
  };

  if (loading) return <Loading />;
  if (error || userUpdateError) {
    showToast("error", error?.message || "An unknown error occurred");
  }

  return (
    <KeyboardAvoidingView
      className="flex-1 flex items-start"
      behavior={"position"}
      keyboardVerticalOffset={-100}
    >
      <SafeAreaView className="h-full bg-white">
        <ScrollView className="h-full px-4">
          <BackArrow label="My Profile" />
          <ImageUpload
            onImageSelected={setSelectedImage}
            initialImage={profilePhoto}
          />
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
        {isUploading && (
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <ActivityIndicator size="large" color="#ffffff" />
            <Text style={{ color: "#ffffff", marginTop: 10 }}>
              Uploading...
            </Text>
          </View>
        )}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
