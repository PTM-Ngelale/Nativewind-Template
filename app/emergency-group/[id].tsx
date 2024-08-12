import {
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageProps,
  KeyboardAvoidingView,
} from "react-native";
import CustomTextInput from "@/components/ui/CustomInput";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import CustomButton from "@/components/ui/CustomButton";
import { useEffect, useRef, useState } from "react";
import {
  differenceInDays,
  differenceInHours,
  formatDistanceToNow,
} from "date-fns";

const EmergencyData = [
  {
    name: "Kizito Don-Pedro",
    description:
      "Who is around that house?Can someone check it out?and give us an update...",
    image: require("../../assets/images/emergency-photo-one.png"),
    time: "2h",
    profilePicture: require("../../assets/images/profile-pic.png"),
  },
  {
    name: "Kizito Don-Pedro",
    description:
      "Who is around that house?Can someone check it out?and give us an update...",
    image: require("../../assets/images/emergency-photo-one.png"),
    time: "2h",
    profilePicture: require("../../assets/images/profile-pic.png"),
  },
  {
    name: "Kizito Don-Pedro",
    description:
      "Who is around that house?Can someone check it out?and give us an update...",
    image: require("../../assets/images/emergency-photo-two.png"),
    time: "2h",
    profilePicture: require("../../assets/images/profile-pic.png"),
  },
  {
    name: "Kizito Don-Pedro",
    description:
      "Who is around that house?Can someone check it out?and give us an update...",
    image: require("../../assets/images/emergency-photo-three.png"),
    time: "2h",
    profilePicture: require("../../assets/images/profile-pic.png"),
  },
  {
    name: "Kizito Don-Pedro",
    description:
      "Who is around that house?Can someone check it out?and give us an update...",
    image: require("../../assets/images/emergency-photo-four.png"),
    time: "2h",
    profilePicture: require("../../assets/images/profile-pic.png"),
  },
  {
    name: "Kizito Don-Pedro",
    description:
      "Who is around that house?Can someone check it out?and give us an update...",
    image: require("../../assets/images/emergency-photo-one.png"),
    time: "2h",
    profilePicture: require("../../assets/images/profile-pic.png"),
  },
];

const formatTimestamp = (timestamp: string) => {
  const now = new Date();
  const date = new Date(timestamp);
  const hours = differenceInHours(now, date);
  const days = differenceInDays(now, date);

  if (days > 0) {
    return `${days}d`;
  } else if (hours > 0) {
    return `${hours}h`;
  } else {
    return formatDistanceToNow(date, {
      addSuffix: false,
      includeSeconds: true,
    }).replace("about ", "");
  }
};

const EmergencyPost = ({
  name,
  message,
  imageUrl,
  timestamp,
  profilePicture,
}: {
  name: string;
  message: string;
  imageUrl: ImageProps;
  timestamp: string;
  profilePicture: ImageProps;
}) => {
  return (
    <View className="px-4 flex flex-row space-x-4 py-4 bg-[#EAEAEA]">
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => router.back()}
        className=" rounded-full overflow-hidden"
      >
        <Image
          source={profilePicture}
          className="w-full h-full"
          resizeMode="cover"
        />
      </TouchableOpacity>
      <View className="space-y-2.5 flex-1">
        <View className="flex flex-row justify-between items-center">
          <Text className="font-bold text-base text-[#4B5563]">{name}</Text>
          <Text className="text-[#4B5563] text-base">
            {formatTimestamp(timestamp)}
          </Text>
        </View>
        <Text className="text-[#4B5563] leading-[16px]">{message}</Text>
        {imageUrl ? (
          <TouchableOpacity className="w-full rounded-md h-[198px]">
            <Image
              source={imageUrl}
              className="w-full h-full rounded-md"
              resizeMode="cover"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
const EmergencyGroup = () => {
  const params = useLocalSearchParams();
  const { id, address, emergency, latitude, longitude, chats } = params;

  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const flatListRef = useRef<FlatList>(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  useEffect(() => {
    if (flatListRef.current) {
      setTimeout(() => {
        flatListRef?.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, []);

  let parsedChats = [];
  try {
    if (typeof chats === "string") {
      parsedChats = JSON.parse(chats);
    } else {
      parsedChats = chats;
    }
  } catch (error) {
    console.error("Failed to parse chats:", error);
  }

  return (
    <KeyboardAvoidingView
      behavior={"padding"}
      className="bg-white w-full h-full"
    >
      <SafeAreaView className="flex-1">
        <FlatList
          ref={flatListRef}
          data={parsedChats}
          ListHeaderComponent={() => {
            return (
              <View>
                <View className="bg-white p-4">
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => router.back()}
                  >
                    <Image
                      source={require("../../assets/images/backbutton.png")}
                      resizeMode="contain"
                      className="h-[24px] w-[24px]"
                    />
                  </TouchableOpacity>
                </View>
                <View className="px-4 py-[34px] bg-[#192655] space-y-2 items-center">
                  <Text className="font-bold text-base text-white">
                    Jane Kameroon
                  </Text>
                  <View className="flex flex-row items-center space-x-2">
                    <Image
                      source={require("../../assets/images/location.png")}
                      resizeMode="contain"
                      className="h-[16px] w-[16px]"
                    />
                    <Text className="text-white text-sm">
                      Location: {address}
                    </Text>
                  </View>
                  <CustomButton
                    onPress={() => {}}
                    title="Get Direction"
                    textStyle="text-[#192655] text-sm text-center px-2"
                    customStyle="bg-white mt-3"
                  />
                  <View className=""></View>
                </View>
                <View className="px-4 py-2 items-center bg-[#D22121]">
                  <View className="space-x-3 items-center flex flex-row">
                    <Image
                      source={require("../../assets/images/Fire.png")}
                      resizeMode="contain"
                      className="h-[13px] w-[13px]"
                    />
                    <Text className="text-white text-base">{emergency}</Text>
                  </View>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ width: "100%", backgroundColor: "green" }}
          renderItem={({ item }) => <EmergencyPost {...item} />}
        />
        <View className="px-4  py-4 space-x-3 flex items-center justify-between flex-row">
          <TouchableOpacity onPress={pickImageAsync}>
            <View className="w-10 h-10 items-center justify-center rounded-full border border-[#6B728080]">
              <Image
                resizeMode="contain"
                className="w-5 h-5"
                source={require("../../assets/images/plus.png")}
              />
            </View>
          </TouchableOpacity>
          {selectedImage && (
            <Image
              resizeMode="cover"
              source={{ uri: selectedImage }}
              className="h-10 w-10 rounded-lg"
            />
          )}
          <CustomTextInput
            placeholder="Add you comment"
            placeholderTextColor="#9CA3AF"
            borderStyle="border-0 bg-white h-10 mx-2 flex-1"
          />
          <CustomButton
            onPress={() => {}}
            title="send"
            textStyle="text-[#6B7280] text-center "
            customStyle="bg-[#192655] border border-[#D1D5DB] w-[70px] bg-white"
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EmergencyGroup;
