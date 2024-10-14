import { TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";

interface ImageUploadProps {
  onImageSelected: (image: ImagePicker.ImagePickerResult) => void;
  initialImage?: string | null; // Add initialImage prop
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onImageSelected,
  initialImage,
}) => {
  const [selectedImage, setSelectedImage] = useState<null | string>(
    initialImage || null
  );

  useEffect(() => {
    if (initialImage) {
      setSelectedImage(initialImage);
    }
  }, [initialImage]);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      onImageSelected(result); // Pass the selected image to the parent component
    }
  };

  return (
    <TouchableOpacity
      onPress={pickImageAsync}
      className="w-full mt-4 relative rounded-lg items-center flex justify-center border-1 border-[#E1E1E1] h-[321px] bg-[#F8F8F8]"
    >
      {selectedImage ? (
        <Image
          resizeMode="cover"
          className="h-full rounded-lg absolute inset-0 w-full"
          source={{ uri: selectedImage }}
        />
      ) : (
        <Image
          resizeMode="contain"
          className="h-[60px] w-[60px]"
          source={require("../../assets/images/image-plus.png")}
        />
      )}
    </TouchableOpacity>
  );
};

export default ImageUpload;
