import CustomButton from "@/components/ui/CustomButton";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import CustomTextInput from "@/components/ui/CustomInput";
import { useState, useEffect } from "react";
import { useRouter, Link } from "expo-router";
import { TouchableOpacity } from "react-native";

const SignUp = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
    // router.push("/(tokenValidation)");
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
    token: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const { email, password, token } = form;
    if (!email || !password || !token) {
      setErrorMessage("All fields are required.");
      return false;
    }

    if (token !== "000") {
      setErrorMessage("Please Input a correct token.");
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
                    <View className="flex-row space-x-1">
                      <Text>Already have an account?</Text>
                      <Link href={"/(auth)/Login"}>
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
