import CustomButton from "@/components/ui/CustomButton";
import CustomTextInput from "@/components/ui/CustomInput";
import { useCreateUserMutation, RoleType } from "@/generated/graphql";
import { ApolloError } from "@apollo/client";

import { Href, Link, useRouter } from "expo-router";
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

const SignUp = () => {
  const router = useRouter();
  const [registerUser, { loading}] = useCreateUserMutation({
    onCompleted: async (data) => {
      if (data.registerUser) {
        Toast.show({
          type: "success",
          text1: "Please check your mail to confirm account.",
        });
        router.push({
          pathname: "/(auth)/Validation",
          params: { email: data.registerUser.email },
        } as Href<string>);
      }
    },

    onError: (error: ApolloError) => {
      Toast.show({ type: "error", text1: error.message });
    },
  });

  const handleBack = () => {
    router.back();
    // router.push("/(tokenValidation)");
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
    token: "",
  });

  const validateForm = () => {
    const { email, password, token } = form;
    if (!email || !password || !token) {
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

  const handleSignup = async () => {
    if (validateForm()) {
      await registerUser({
        variables: {
          data: {
            email: form.email,
            password: form.password,
            token: form.token,
            role: RoleType.User,
          },
        },
      });
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <KeyboardAvoidingView enabled behavior="position">
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
            <View className=" absolute -bottom-[60px] w-full flex-col px-4 justify-center items-center h-full">
              <View className="max-w-full  mx-auto flex-col space-y-[25px] ">
                <View className="flex-col space-y-[15px]">
                  <View className="flex-col space-y-2">
                    <Text className="font-[700] text-[#192655] text-[24px]">
                      Sign Up
                    </Text>
                    <Text className="text-[14px]">
                      <Text className="font-bold">Welcome to ALARMIXX</Text>,
                      your go to app for safety & security. To continue please
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
                      <View>
                        <CustomTextInput
                          placeholder="Input Token"
                          placeholderTextColor="#000"
                          value={form.token}
                          onChangeText={(e: any) =>
                            setForm({ ...form, token: e })
                          }
                        />
                      </View>
                    </View>

                    <View>
                      <CustomButton
                        title="Sign Up"
                        textStyle="text-white"
                        customStyle="bg-[#192655]"
                        onPress={handleSignup}
                        isLoading={loading}
                      />
                    </View>
                    <View className="flex-row space-x-1">
                      <Text>Already have an account?</Text>
                      <Link href={"/(auth)/Login" as Href<string>}>
                        <Text className="text-[#192655] font-bold">Login</Text>
                      </Link>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
