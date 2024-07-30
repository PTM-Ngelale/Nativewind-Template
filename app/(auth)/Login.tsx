import CustomButton from "@/components/ui/CustomButton";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import CustomTextInput from "@/components/ui/CustomInput";
import { useState, useEffect } from "react";
import { useRouter, Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Login = () => {
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
      router.push("/(auth)/Validation");
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <SafeAreaView className="bg-white h-full">
      <KeyboardAvoidingView enabled behavior="position">
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View className="w-full justify-center items-center min-h-[85vh]">
            <View className="px-4 w-full h-full flex-col">
              <View className="max-w-[312px]  mx-auto flex-col space-y-[25px] ">
                <TouchableOpacity onPress={handleBack}>
                  <Image source={require("@/assets/images/left.png")} />
                </TouchableOpacity>
                <View className="flex-col space-y-[15px]">
                  <View className="flex-col space-y-2">
                    <Text className="font-[700] text-[#192655] text-[24px]">
                      Login
                    </Text>
                    <Text className="text-[12px]">
                      Welcome back to Whistler, your go to app for safety &
                      security. To continue please fill in your details
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
                    {errorMessage ? (
                      <Text className="text-red-500 text-center mt-2">
                        {errorMessage}
                      </Text>
                    ) : null}
                    <View>
                      <CustomButton
                        title="Login"
                        textStyle="text-white"
                        customStyle="bg-[#192655]"
                        onPress={handleContinue}
                      />
                    </View>
                    <View className="flex-row space-x-1">
                      <Text>Don't have an account?</Text>
                      <Link href={"/(auth)/SignUp"}>
                        <Text className="text-[#192655] font-bold">
                          Sign Up
                        </Text>
                      </Link>
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
