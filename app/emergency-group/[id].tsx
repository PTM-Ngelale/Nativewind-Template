import CustomButton from "@/components/ui/CustomButton";
import CustomTextInput from "@/components/ui/CustomInput";
import {
  useChatCreatedSubscription,
  useCreateChatMutation,
  useUploadFileMutation,
  useGetChatsByAlertIdQuery,
} from "@/generated/graphql";
import { ApolloError } from "@apollo/client";
import {
  differenceInDays,
  differenceInHours,
  formatDistanceToNow,
} from "date-fns";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  ImageProps,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

type Chat = {
  __typename?: "Chat";
  id: string;
  message: string;
  timestamp: string;
  alertId: string;
  user: {
    __typename?: "User";
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    profilePhoto?: string | null;
  };
};

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
  user,
  message,
  imageUrl,
  timestamp,
}: {
  user: { firstName: string; lastName: string; profilePhoto: ImageProps };
  message: string;
  imageUrl: ImageProps;
  timestamp: string;
}) => {
  const getInitials = (firstName: string, lastName: string) => {
    // Check if firstName or lastName is null
    if (!firstName && !lastName) {
      return "JD"; // Return "Unknown User" if both are null
    }
    return `${firstName?.charAt(0) || ""}${lastName?.charAt(0) || ""}`;
  };

  return (
    <View className=" flex flex-col  bg-[#EAEAEA]">
      <View className="flex flex-row  justify-between px-4 pt-4 space-x-2 items-center w-full">
        <View className="flex justify-between flex-row items-center space-x-2 flex-0">
          {user?.profilePhoto ? (
            <Image
              source={user.profilePhoto}
              className="w-full h-full rounded-full"
              resizeMode="cover"
            />
          ) : (
            <View className="w-10 h-10  rounded-full bg-[#192655]  flex items-center justify-center">
              <Text className="text-white">
                {getInitials(user?.firstName, user?.lastName)}
              </Text>
            </View>
          )}
          {user?.firstName && (
            <Text className="font-bold text-[16px]">
              {user.firstName}
              {user.lastName}
            </Text>
          )}
        </View>

        <View className="flex ml-auto">
          <Text className="text-[#4B5563] text-xs">
            {formatTimestamp(timestamp)}
          </Text>
        </View>
      </View>
      <View className="flex flex-row px-8 ml-4 space-x-4 items-center pb-4 ">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.back()}
          className=" rounded-full overflow-hidden"
        ></TouchableOpacity>
        <View className="space-y-2.5 flex-1">
          <Text className="text-[#4B5563] leading-[16px]">{message}</Text>
          {typeof imageUrl === "string" && imageUrl ? (
            <TouchableOpacity className="w-full rounded-md h-[198px]">
              <Image
                source={{ uri: imageUrl }}
                className="w-full h-full rounded-md"
                resizeMode="cover"
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};
const EmergencyGroup = () => {
  const params = useLocalSearchParams();
  const { id, address, emergency, userId } = params;
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<null | File>(null);
  const { data: chatMessages } = useGetChatsByAlertIdQuery({
    variables: {
      alertId: id as string,
    },
  });
  const [isSending, setIsSending] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    if (chatMessages?.findChatsByAlertId) {
      setChats(
        chatMessages.findChatsByAlertId.filter(
          (chat) => chat !== null
        ) as Chat[]
      );
    }
  }, [chatMessages]);

  const [createChat] = useCreateChatMutation({
    onCompleted: async () => {},

    onError: (error: ApolloError) => {
      Toast.show({ type: "error", text1: error.message });
      console.log(error.message);
    },
  });

  const { data: subscriptionData } = useChatCreatedSubscription();

  useEffect(() => {
    if (subscriptionData) {
      // Check if the new message belongs to the current alert
      if (subscriptionData.chatCreated.alertId === id) {
        // Check if the message already exists in the chats
        const messageExists = chats.some(
          (chat) => chat.id === subscriptionData.chatCreated.id
        );

        if (!messageExists) {
          // Update the chat state by appending the new message
          setChats((prevChats) => [
            ...prevChats,
            subscriptionData.chatCreated as Chat,
          ]);

          // Scroll to the end of the list when a new message is added
          flatListRef.current?.scrollToEnd({ animated: true });

          // Check if the message is from a different user
          if (subscriptionData?.chatCreated?.user?.id !== userId) {
            // Play a sound or vibrate
            Vibration.vibrate(); // Vibrate the device
          }
        }
      }
    }
  }, [subscriptionData]);

  const flatListRef = useRef<FlatList>(null);

  const [handleUploadFile, { loading: uploadLoading }] = useUploadFileMutation({
    onCompleted: (data) => {
      setImageUrl(data.uploadFile);
      console.log(data.uploadFile);
      // console.log(imageUrl);
    },
    onError: (error) => {
      Toast.show({ type: "error", text1: error.message });
      console.log(error.message);
    },
    context: {
      headers: {
        "x-apollo-operation-name": "UploadFile",
      },
    },
  });

  const handleSendMessage = async () => {
    setIsSending(true);
    if (selectedImageFile) {
      await handleUploadFile({
        variables: {
          data: selectedImageFile,
        },
      });
    }

    await createChat({
      variables: {
        data: {
          message: message,
          imageUrl: imageUrl,
          alert: {
            connect: {
              id: id as string,
            },
          },
          user: {
            connect: {
              id: userId as string,
            },
          },
        },
      },
    });

    setMessage("");
    setImageUrl(null);
    setSelectedImageFile(null);
    setSelectedImage(null);
    setTimeout(() => {
      flatListRef?.current?.scrollToEnd({ animated: true });
    }, 100);
    setIsSending(false);
  };

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
    });

    if (!result.canceled) {
      const asset = result.assets[0];
      const fileUri = asset.uri;
      const response = await fetch(fileUri);
      const blob = await response.blob();
      const file = new File([blob], asset.fileName as string, {
        type: asset.type,
        lastModified: Date.now(),
      });
      setSelectedImageFile({
        name: "test.jpg",
        type: "image/jpeg",
        lastModified: Date.now(),
      } as File);
      setSelectedImage(fileUri);
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
  }, [chats]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setTimeout(() => {
          flatListRef?.current?.scrollToEnd({ animated: true });
        }, 100);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "height" : "height"}
      className="bg-white w-full h-full"
      style={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">
        <FlatList
          ref={flatListRef}
          data={chats}
          keyExtractor={(item) => item.id}
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
                  {/* <Text className="font-bold text-base text-white">
                    Jane Kameroon
                  </Text> */}
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
                  {/* <CustomButton
                    onPress={getDirection}
                    title="Get Direction"
                    textStyle="text-[#192655] text-sm text-center px-2"
                    customStyle="bg-white mt-3"
                  /> */}
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
          contentContainerStyle={{ width: "100%" }}
          renderItem={({ item }) => <EmergencyPost {...item} />}
        />
      </SafeAreaView>
      <View className="px-4  py-2 space-x-3 flex items-center justify-between flex-row">
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
          borderStyle="border-0 bg-white h-4 mx-2 flex-1"
          value={message}
          onChangeText={setMessage}
        />
        <CustomButton
          onPress={() => {
            if (message.trim()) {
              handleSendMessage(); // Call createChat with the message
            }
          }}
          disabled={isSending}
          title="Send"
          textStyle="text-[#6B7280] text-center  text-sm"
          customStyle="bg-[#192655] border border-[#D1D5DB] w-[70px] bg-white"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default EmergencyGroup;
