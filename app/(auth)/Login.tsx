import CustomButton from "@/components/ui/CustomButton";
import CustomTextInput from "@/components/ui/CustomInput";
import { useUser } from "@/context/userContext";
import { useLoginUserMutation } from "@/generated/graphql";
import { getCurrentServerIdentifier } from "@/utils/serverIdentifier";
import { ApolloError } from "@apollo/client";
import { Href, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Toast from "react-native-toast-message";

const Login = () => {
  const router = useRouter();
  const { expoPushToken, deviceInfo } = useUser();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = useLoginUserMutation({
    onCompleted: async (data) => {
      if (data.loginUser.token) {
        Toast.show({ type: "success", text1: "Welcome back." });
        // Calculate expiration time (current time + 72 hours)
        const expirationTime = new Date().getTime() + 72 * 60 * 60 * 1000;
        const serverIdentifier = getCurrentServerIdentifier(); // Get the current server identifier
        const tokenData = JSON.stringify({
          token: data.loginUser.token,
          expiration: expirationTime,
          serverIdentifier, // Include final server identifier
        });

        // Store token and expiration time in SecureStore
        await SecureStore.setItemAsync("alarmixToken", tokenData);

        router.replace("/(tabs)" as Href<string>);
      } else {
        Toast.show({ type: "success", text1: "New device detected" });
        router.push({
          pathname: "/(auth)/Validation",
          params: { email: form.email, type: "device_change" },
        } as Href<string>);
      }
    },
    onError: (error: ApolloError) => {
      Toast.show({ type: "error", text1: error.message });
    },
  });

  const handleBack = () => {
    router.back();
  };

  const validateForm = () => {
    const { email, password } = form;
    if (!email || !password) {
      Toast.show({ type: "error", text1: "All fields are required." });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Toast.show({
        type: "error",
        text1: "Please enter a valid email address.",
      });
      return false;
    }

    return true;
  };

  const handleContinue = async () => {
    if (validateForm()) {
      await loginUser({
        variables: {
          email: form.email,
          password: form.password,
          deviceName: deviceInfo.deviceName,
          deviceModel: deviceInfo.deviceModel,
          pushToken: expoPushToken,
        },
      });
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <KeyboardAvoidingView behavior="padding">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="relative h-full">
            <View className=" relative h-full">
              <TouchableOpacity
                className="absolute top-5 left-5 z-10"
                onPress={handleBack}
              >
                <Image source={require("@/assets/images/left-white.png")} />
              </TouchableOpacity>
              <Image
                source={require("@/assets/images/heroBg.png")}
                className="w-full rounded-[8px]"
              />
            </View>
            <View className="absolute -bottom-[40px] w-full flex-col px-4 justify-center items-center h-full ">
              <View className="w-full  mx-auto flex-col space-y-[25px] ">
                <View className="flex-col space-y-[15px]">
                  <View className="flex-col space-y-2">
                    <Text className="font-[700] text-[#192655] text-[24px]">
                      Login
                    </Text>
                    <Text className="text-[14px]">
                      <Text className="font-bold">
                        Welcome back to ALARMIXX
                      </Text>
                      , your go to app for safety & security. To continue please
                      fill in your details
                    </Text>
                  </View>

                  <View className="flex-col space-y-[25px]">
                    <View className="space-y-[15px]">
                      <View>
                        <CustomTextInput
                          placeholder="Email"
                          placeholderTextColor="#000"
                          value={form.email}
                          onChangeText={(e: any) =>
                            setForm({ ...form, email: e })
                          }
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

                    <View>
                      <CustomButton
                        title="Login"
                        textStyle="text-white"
                        customStyle="bg-[#192655]"
                        onPress={handleContinue}
                        isLoading={loading}
                      />
                    </View>
                    <View className="flex-row space-x-1">
                      <Text>Don't have an account?</Text>
                      <TouchableOpacity
                        onPress={() =>
                          router.push("/(auth)/SignUp" as Href<string>)
                        }
                      >
                        <Text className="text-[#192655] font-bold">
                          Sign Up
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      {/* <StatusBar backgroundColor="#FFFFFF" style="dark" /> */}
    </SafeAreaView>
  );
};

export default Login;
