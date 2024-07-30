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
import { useRouter } from "expo-router";

const Validation = () => {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleOtpChange = (otp: any) => {
    setOtp(otp);
    setError("");
  };

  const handleValidation = () => {
    if (otp !== "00000") {
      setError("Invalid OTP. Please try again.");
    } else {
      router.push("/(tabs)");
    }
  };

  const styles = StyleSheet.create({
    inputCell: {
      borderWidth: 1,

      borderColor: "#F8F8F8",
      backgroundColor: "#F8F8F8",
      width: 40,
      height: 40,
      textAlign: "center",
      borderBottomWidth: 1,
      borderRadius: 5,
    },
  });

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
                  An OTP was sent, please enter the Email code
                </Text>
              </View>
            </View>
            <View className="mt-[125px] space-y-4">
              <OTPTextView
                inputCount={5}
                autoFocus={true}
                tintColor="#2196F3"
                offTintColor="#787878"
                containerStyle={{ justifyContent: "space-between" }}
                inputCellLength={1}
                textInputStyle={styles.inputCell}
                handleTextChange={handleOtpChange}
              />
              {error && (
                <Text className="text-red-500 text-[14px]">{error}</Text>
              )}
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
