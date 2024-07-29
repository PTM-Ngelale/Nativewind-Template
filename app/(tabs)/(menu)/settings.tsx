import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useState } from "react";
import BackArrow from "@/components/ui/BackArrow";
import DropDownPicker from "react-native-dropdown-picker";

const Settings = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "250m", value: "250m" },
    { label: "500m", value: "500m" },
    { label: "1km", value: "1km" },
    { label: "5km", value: "5km" },
    { label: "10km", value: "10km" },
  ]);
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView className="h-full px-4">
        <BackArrow label="Settings" />
        <View className="flex space-y-2">
          <Text className="text-[#4E4E4F] font-normal">
            Notifications Range
          </Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            placeholder="Select Range"
          />
          <Text className="text-[#4E4E4F] text-sm">
            Customize your preferred notification alert radius
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
