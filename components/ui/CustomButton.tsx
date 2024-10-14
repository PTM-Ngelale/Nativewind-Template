import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress?: any;
  customStyle?: string;
  isLoading?: boolean; // Changed to lowercase 'boolean'
  textStyle?: string;
  disabled?: boolean; // Added disabled prop
}

const CustomButton = ({
  title,
  onPress,
  customStyle,
  textStyle,
  isLoading,
  disabled, // Destructure disabled prop
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={isLoading || disabled ? null : onPress} // Disable onPress when loading or disabled
      className={`rounded-xl min-h-[50px] justify-center items-center ${customStyle} ${disabled ? 'opacity-50' : ''}`} // Add opacity for disabled state
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
