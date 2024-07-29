import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

type Props = {
  label: string;
};

const BackArrow = ({ label }: Props) => {
  return (
    <View className="space-y-2">
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          className="h-[24px] w-[24px]"
          source={require("../../assets/images/back-arrow.png")}
        />
      </TouchableOpacity>
      <Text className="text-[#192655] text-[24px] font-bold text-2xl">
        {label}
      </Text>
    </View>
  );
};

export default BackArrow;
