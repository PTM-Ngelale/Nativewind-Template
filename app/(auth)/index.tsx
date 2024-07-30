import CustomButton from "@/components/ui/CustomButton";
import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";
import CustomTextInput from "@/components/ui/CustomInput";
import { useState } from "react";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const index = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const { email, password } = form;
    if (!email || !password) {
      setErrorMessage("All fields are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleContinue = () => {
    if (validateForm()) {
      router.push("/(tabs)");
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView className="w-full h-full flex-col">
        <View className="px-4 ">
          <View className="max-w-full  mx-auto flex-col space-y-[25px] ">
            <TouchableOpacity onPress={handleBack}>
              <Image source={require("@/assets/images/left.png")} />
            </TouchableOpacity>
            <View className="flex-col space-y-[15px]">
              <View className="flex-col space-y-2">
                <Text className="font-[700] text-[#192655] text-[24px]">
                  Sign Up
                </Text>
                <Text className="text-[14px]">
                  Welcome to Whistler, your go to app for safety & security. To
                  continue please fill in your details
                </Text>
              </View>
              <View className="w-full  flex-row justify-center">
                <Image
                  source={require("@/assets/images/heroImg.png")}
                  className="w-[312px] rounded-[8px]"
                />
              </View>
              <View className="flex-col space-y-[25px]">
                <View className="space-y-[15px]">
                  <View>
                    <CustomTextInput
                      placeholder="Email"
                      placeholderTextColor="#000"
                      value={form.email}
                      onChangeText={(e: any) => setForm({ ...form, email: e })}
                    />
                  </View>
                  <View>
                    <CustomTextInput
                      placeholder="Password"
                      placeholderTextColor="#000"
                      value={form.password}
                      onChangeText={(e: any) =>
                        setForm({ ...form, password: e })
                      }
                    />
                  </View>
                </View>
                {errorMessage ? (
                  <Text className="text-red-500 text-center mt-2">
                    {errorMessage}
                  </Text>
                ) : null}
                <View>
                  <CustomButton
                    title="Sign Up"
                    textStyle="text-white"
                    customStyle="bg-[#192655]"
                    onPress={handleContinue}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
