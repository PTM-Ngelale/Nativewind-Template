import CustomButton from "@/components/ui/CustomButton";
import { useUser } from "@/context/userContext";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, SafeAreaView, ScrollView, View } from "react-native";
import useAuth from "@/hooks/useAuth";
import Loading from "@/components/Loading";

const OnBoarding = () => {
  const { checkIfLocationEnabled } = useUser();
  const { isLoading, userToken } = useAuth();

  useEffect(
    () => {
      if (userToken) {
        router.push("/(tabs)");
      } else {
        checkIfLocationEnabled();
      }
    },
    [isLoading, userToken, checkIfLocationEnabled]
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <View className="space-y-[150px] w-full">
            <View className="w-full flex-row justify-center">
              <Image source={require("@/assets/images/onLogo.png")} />
            </View>
            <View className="w-full space-y-[15px]">
              <View>
                <CustomButton
                  title="Login"
                  textStyle="text-white"
                  customStyle="bg-[#192655]"
                  onPress={() => router.push("/Login")}
                />
              </View>
              <View>
                <CustomButton
                  title="Sign Up"
                  textStyle="text-[#192655]"
                  customStyle="bg-[#ffffff] border-[1px] border-solid border-[#192655]"
                  onPress={() => router.push("/SignUp")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnBoarding;
