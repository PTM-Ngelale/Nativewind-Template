import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress?: any;
  customStyle?: string;
  isLoading?: Boolean;
  textStyle?: string;
}

const CustomButton = ({
  title,
  onPress,
  customStyle,
  textStyle,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={isLoading ? null : onPress} // Disable onPress when loading
      className={`rounded-xl min-h-[50px] justify-center items-center ${customStyle}`}
    >
      {isLoading ? (
        <View className="flex-row items-center">
          <ActivityIndicator size="small" color="#fff" />
          <Text className="ml-2 text-lg text-white">Please Wait...</Text>
        </View>
      ) : (
        <Text className={`${textStyle} text-lg`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
