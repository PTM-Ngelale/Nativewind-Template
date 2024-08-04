import React from "react";
import Toast from "react-native-toast-message";

const ToastComponent = () => {
  return <Toast />;
};

export const showToast = (
  type: "success" | "error" | "info",
  text1: string,
  text2?: string
) => {
  Toast.show({
    type,
    text1,
    text2,
  });
};

export default ToastComponent;
