import { SafeAreaView, ScrollView, View, Image } from "react-native";
import CustomButton from "@/components/ui/CustomButton";

import { router } from "expo-router";

const index = () => {
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
                  onPress={() => router.push("/(auth)/Login")}
                />
              </View>
              <View>
                <CustomButton
                  title="Sign Up"
                  textStyle="text-[#192655]"
                  customStyle="bg-[#ffffff] border-[1px] border-solid border-[#192655]"
                  onPress={() => router.push("/(auth)/SignUp")}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
