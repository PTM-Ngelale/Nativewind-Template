import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
} from "react-native";
import CustomButton from "@/components/ui/CustomButton";
import { useState } from "react";
import { router } from "expo-router";

const index = () => {
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleContinue = () => {
    if (token !== "000") {
      setErrorMessage("Please Input a correct token.");
    } else {
      setErrorMessage("");
      router.push("/onBoarding");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4 ">
          <View className="flex-col space-y-[25px] w-full">
            <View className="w-full flex-row justify-center">
              <Image source={require("@/assets/images/logo.png")} />
            </View>
            <Text className="text-center p-4 bg-[#F8F8F8] rounded-xl">
              Loremm ipsum dolor sit amet consectetur. Congue magna arcu sapien
              sed duis dolor enim.
            </Text>
            <View className="flex-col space-y-[25px]">
              <View className="w-full flex-row justify-center bg-[#F8F8F8] p-4 rounded-xl">
                <TextInput
                  placeholder="Input Company Token"
                  placeholderTextColor="#000000"
                  className="w-full text-center"
                  value={token}
                  onChangeText={setToken}
                />
              </View>
              {errorMessage ? (
                <Text className="text-red-500 text-center mt-2">
                  {errorMessage}
                </Text>
              ) : null}
              <View>
                <CustomButton
                  title="Continue"
                  onPress={handleContinue}
                  customStyle="bg-[#192655]"
                  textStyle="text-white"
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
