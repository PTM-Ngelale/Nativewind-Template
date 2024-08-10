import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CustomButton from "@/components/ui/CustomButton";
import OTPTextView from "react-native-otp-textinput";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useMutation } from "@apollo/client";
import { VERIFY_OTP_MUTATION } from "@/graphql/mutations";
import { showToast } from "@/components/ToastComponent";

const Validation = () => {
  const router = useRouter();
  const [verifyOtp, { loading, error }] = useMutation(VERIFY_OTP_MUTATION);
  const params = useLocalSearchParams();
  const { email } = params;

  console.log(email);
  const handleBack = () => {
    router.back();
  };

  const [otp, setOtp] = useState("");

  const handleOtpChange = (otp: any) => {
    setOtp(otp);
  };

  const handleValidation = async () => {
    try {
      const { data } = await verifyOtp({
        variables: {
          email: email,
          otp: otp,
        },
      });

      if (data.verifyOtp) {
        router.push("/(tabs)");
      } else {
        showToast("error", "Invalid OTP. Please try again.");
      }
    } catch (e: any) {
      if (e.graphQLErrors && e.graphQLErrors.length > 0) {
        showToast("error", e.graphQLErrors[0].message);
      } else {
        showToast("error", e.message || "Validation failed. Please try again.");
      }
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
                  An OTP was sent to {email}, please enter the code sent
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
                <Text className="text-[#192655] font-bold">Resend Code</Text>
              </Text>
            </View>
            <View className="mt-[300px]">
              <CustomButton
                onPress={handleValidation}
                title="Validate"
                customStyle="bg-[#192655]"
                isLoading={loading}
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
