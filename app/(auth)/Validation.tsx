import {
  ScrollView,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
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

  const handleOtpChange = (otp: any) => {
    setOtp(otp);
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
                <Text className="text-[12px]">
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
                containerStyle={{ width: 40 }}
                handleTextChange={handleOtpChange}
              />

              <Text className="">
                Code not sent?{" "}
                <Text className="text-[#192655] font-bold">Resend Code</Text>
              </Text>
            </View>
            <View className="mt-[300px]">
              <CustomButton
                onPress={() => router.push("/(tabs)")}
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
