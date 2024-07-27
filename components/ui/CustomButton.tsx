import { TouchableOpacity, Text } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress?: any;
  customStyle?: string;
  isLoading?: any;
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
      onPress={onPress}
      className={`rounded-xl min-h-[50px] justify-center items-center ${customStyle}`}
    >
      <Text className={`${textStyle} text-lg`}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;
