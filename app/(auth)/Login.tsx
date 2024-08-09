import CustomButton from "@/components/ui/CustomButton";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import CustomTextInput from "@/components/ui/CustomInput";
import { useState, useEffect } from "react";
import { useRouter, Href } from "expo-router";
import { LOGIN_MUTATION } from "@/graphql/mutations";
import { ApolloError, useMutation } from "@apollo/client";
import { showToast } from "@/components/ToastComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const router = useRouter();
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);
  const handleBack = () => {
    router.back();
    // router.push(/(tokenValidation));
  };
  const [form, setForm] = useState({
    email: "",
    password: ""
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

  const handleContinue = async () => {
    if (validateForm()) {
      try {
        const { data } = await login({
          variables: { email: form.email, password: form.password }
        });
        if (data.login.token) {
          showToast("success", "Login Successful");
          await AsyncStorage.setItem("userToken", data.login.token);
          router.push("/(tabs)" as Href<string>);
        }
      } catch (error) {
        const apolloError = error as ApolloError; 
        if (apolloError.graphQLErrors && apolloError.graphQLErrors.length > 0) {
          showToast("error", apolloError.graphQLErrors[0].message);
        } else {
          showToast("error", "Login failed. Please try again.");
        }
      }
    }
  };

  useEffect(
    () => {
      if (errorMessage) {
        const timer = setTimeout(() => {
          setErrorMessage("");
        }, 3000);

        return () => clearTimeout(timer);
      }
    },
    [errorMessage]
  );

  return (
    <SafeAreaView className="bg-white h-full">
      <KeyboardAvoidingView enabled behavior="position">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="relative h-full">
            <View className=" relative h-full">
              <TouchableOpacity
                className="absolute top-5 left-5 z-10"
                onPress={handleBack}>
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
                            setForm({ ...form, email: e })}
                        />
                      </View>
                      <View>
                        <CustomTextInput
                          placeholder="Password"
                          placeholderTextColor="#000"
                          value={form.password}
                          onChangeText={(e: any) =>
                            setForm({ ...form, password: e })}
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
                          router.push("/(auth)/SignUp" as Href<string>)}>
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
