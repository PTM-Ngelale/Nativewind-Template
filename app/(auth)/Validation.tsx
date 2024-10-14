import CustomButton from "@/components/ui/CustomButton";
import { ApolloError } from "@apollo/client";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";
import { showToast } from "@/components/ToastComponent";
import {
  useGenerateOtpMutation,
  useVerifyDeviceChangeMutation,
  useVerifyUserAccountOtpMutation,
} from "@/generated/graphql";
import Toast from "react-native-toast-message";
import { useUser } from "@/context/userContext";

const Validation = () => {
  const router = useRouter();
  const { expoPushToken, deviceInfo } = useUser();
  const [verifyUserAccountOtp, { loading }] = useVerifyUserAccountOtpMutation({
    onCompleted: async () => {
      router.push("/(auth)/Login");
      showToast("success", "OTP verified successfully");
    },

    onError: (error: ApolloError) => {
      Toast.show({ type: "error", text1: error.message });
    },
  });
  const [verifyDeviceChange, { loading: deviceChangeLoading }] = useVerifyDeviceChangeMutation({
    onCompleted: async () => {
      router.push("/(auth)/Login");
      showToast("success", "New Device Registered, Please Login Again");
    },
    onError: (error: ApolloError) => {
      Toast.show({ type: "error", text1: error.message });
    },
  })
  const [generateOtp, { loading: resendLoading }] = useGenerateOtpMutation({
    onCompleted: async () => {
      showToast("success", "OTP resent successfully.");
    },

    onError: (error: ApolloError) => {
      Toast.show({ type: "error", text1: error.message });
    },
  });
  const params = useLocalSearchParams();
  const { email, type } = params;
  const emailString = Array.isArray(email) ? email[0] : email;
  const handleBack = () => {
    router.back();
  };

  const [otp, setOtp] = useState("");

  const handleOtpChange = (otp: any) => {
    setOtp(otp);
  };

  const handleResendCode = async () => {
    await generateOtp({
      variables: {
        email: emailString,
      },
    });
    setOtp("");
  };

  const handleValidation = async () => {
    if (type === "device_change") {
      console.log("hello world")
      await verifyDeviceChange({
        variables: {
          email: emailString,
          otp,
          deviceName: deviceInfo.deviceName,
          deviceModel: deviceInfo.deviceModel,
          expoPushToken,
        },
      });
    } else {
      await verifyUserAccountOtp({
        variables: {
          email: emailString,
          otp,
        },
      });
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh]">
          <View className="px-4 flex-col w-full">
            <View className="space-y-5">
              <TouchableOpacity onPress={handleBack}>
                <Image source={require("@/assets/images/left.png")} />
              </TouchableOpacity>
              <View className="flex-col space-y-2">
                <Text className="font-[700] text-[#192655] text-[24px]">
                  Validation
                </Text>
                <Text className="text-[14px]">
                  An OTP was sent to <Text className="font-bold">{email}</Text>,
                  please enter the code sent
                </Text>
              </View>
            </View>
            <View className="mt-[125px] space-y-4">
              <OTPTextView
                inputCount={6}
                autoFocus={true}
                tintColor="#2196F3"
                offTintColor="#787878"
                containerStyle={{ justifyContent: "space-between" }}
                inputCellLength={1}
                handleTextChange={handleOtpChange}
              />
              <Text>
                Code not sent?{" "}
                <Text
                  className="text-[#192655] font-bold"
                  onPress={handleResendCode}
                >
                  Resend Code
                </Text>
              </Text>
            </View>
            <View className="mt-[300px]">
              <CustomButton
                onPress={handleValidation}
                title="Validate"
                customStyle="bg-[#192655]"
                isLoading={loading || resendLoading || deviceChangeLoading}
                textStyle="text-white"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Validation;
