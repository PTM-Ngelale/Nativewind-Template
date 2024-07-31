import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Modal,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ImageProps,
} from "react-native";
import CustomButton from "./ui/CustomButton";

const OnboardingData = [
  {
    id: "1",
    title: "Welcome to Alarmix",
    description:
      "Where safety is just a notification away.To begin, simply follow these steps.",
    image: require("../assets/images/Onboard-logo.png"),
    first: true,
  },
  {
    id: "2",
    title: "Report an Emergency",
    description:
      "Simply click the report button to share a non-life-threatening emergency you are currently witnessing.",
    image: require("../assets/images/report-emegency.png"),
  },
  {
    id: "3",
    title: "SOS Alert",
    description:
      "Click this button only for reporting extreme life-threatening situations.",
    image: require("../assets/images/sos-alert.png"),
  },
  {
    id: "4",
    title: "Specify Emergency Type",
    description: "Select the type of emergency.",
    image: require("../assets/images/specify-emergency.png"),
  },
  {
    id: "5",
    title: "Select Location",
    description: "Selet the location.",
    image: require("../assets/images/select-location.png"),
  },
  {
    id: "6",
    title: "Submit",
    description: `Confirm by clicking "Submit" to send out the notification.`,
    image: require("../assets/images/submit-image.png"),
  },
  {
    id: "7",
    title: "Emergency Escalation",
    description:
      "A notification would be sent out to everyone within your visinity..",
    image: require("../assets/images/emergency-escalation.png"),
  },
  {
    id: "8",
    title: "SOS Alert",
    description:
      "Click the SOS button only for reporting extreme life-threatening situations and a notification would be sent out immediately.",
    image: require("../assets/images/sos-alert.png"),
    finish: true,
  },
];

type Props = {
  onboardingModal: boolean;
  setOnBoardingModal: Dispatch<SetStateAction<boolean>>;
};

const Beads = ({ activeItem }: { activeItem: number }) => {
  return (
    <View className="flex flex-row space-x-2 items-center">
      {Array.from({ length: OnboardingData.length }).map((_, index) => {
        return (
          <View
            key={index}
            className={`rounded-full w-3 h-3 ${
              index === activeItem ? "bg-[#192655]" : "bg-[#6B7280]"
            } `}
          />
        );
      })}
    </View>
  );
};

const OnboardingScreen = ({
  title,
  image,
  description,
  first,
  finish,
  setOnBoardingModal,
}: {
  title: String;
  image: ImageProps;
  description: string;
  first?: boolean;
  finish?: boolean;
  setOnBoardingModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <View className="items-center justify-center w-[340px] space-y-5">
      <Text className="font-bold text-[#192655] text-xl">{title}</Text>
      <Image source={image} className="" resizeMode="contain" />
      <Text className="font-normal text-base text-center text-[#4B5563]">
        {description}
      </Text>
      {first && (
        <View className="flex-row space-x-4 items-center">
          <TouchableOpacity>
            <Image
              source={require("../assets/images/arrow-left.png")}
              className="w-[35px] h-[35px]"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text className="text-[#4B5563] text-base">SWIPE LEFT</Text>
        </View>
      )}
      {finish && (
        <CustomButton
          onPress={() => setOnBoardingModal(false)}
          title="Finish"
          textStyle="text-white text-center w-[115px]"
          customStyle="bg-[#192655] mt-4"
        />
      )}
    </View>
  );
};

const Onboarding = ({ onboardingModal, setOnBoardingModal }: Props) => {
  const [activeItem, setActiveItem] = useState(0);
  const viewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].index);
    }
  };
  return (
    <View className="flex-1 justify-center items-center mt-[22px]">
      <Modal
        animationType="slide"
        transparent={true}
        visible={onboardingModal}
        onRequestClose={() => {
          setOnBoardingModal(false);
        }}
      >
        <View className="flex-1 justify-center items-center mt-[22px]">
          <View
            style={{
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
            className="bg-white m-5 w-[380px] space-y-[24px] rounded-[20px] p-5 items-center"
          >
            <Beads activeItem={activeItem} />
            <FlatList
              data={OnboardingData}
              scrollEnabled={true}
              decelerationRate={"fast"}
              snapToAlignment={"start"}
              keyExtractor={(item) => item.id}
              viewabilityConfig={{
                itemVisiblePercentThreshold: 70,
              }}
              onViewableItemsChanged={viewableItemsChanged}
              renderItem={({ item }) => (
                <OnboardingScreen
                  image={item.image}
                  description={item.description}
                  title={item.title}
                  first={item.first}
                  finish={item.finish}
                  setOnBoardingModal={setOnBoardingModal}
                />
              )}
              horizontal
              snapToInterval={340}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Onboarding;
