import { View, TextInput } from "react-native";

interface CustomTextInputProps {
  value?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  borderStyle?: string;
  inputStyle?: string;
  onChangeText?: any;
}

const CustomTextInput = ({
  placeholder,
  value,
  placeholderTextColor,
  onChangeText,
  borderStyle,
  inputStyle,
}: CustomTextInputProps) => {
  return (
    <View
      className={`flex-row border-[0.5px] rounded-[8px] border-[#D4D4D4] w-full h-16 px-4  items-center bg-[#F8F8F8] ${borderStyle}`}
    >
      <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        className={`w-full ${inputStyle}`}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomTextInput;
