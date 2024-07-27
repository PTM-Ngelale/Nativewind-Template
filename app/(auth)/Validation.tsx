import { ScrollView, SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import CustomButton from "@/components/ui/CustomButton";
import OTPTextView from "react-native-otp-textinput";
import { useState } from "react";
import { router } from "expo-router";

const Validation = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (otp: any) => {
    setOtp(otp);
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="relative">
        <View className="px-4 flex-col">
          <View className="space-y-5">
            <View>
              <Image source={require("@/assets/images/left.png")} />
            </View>
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
          <TouchableOpacity  activeOpacity={0.8} onPress={() => router.push('/(tabs)')} className="mt-[300px] bg-[#192655] items-center py-4 rounded-xl">
            <Text className="text-white">Validate</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Validation;
