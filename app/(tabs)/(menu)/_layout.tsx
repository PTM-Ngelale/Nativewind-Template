import { JsStack } from "@/app/layouts/js-stack";
import React from "react";

const MenuLayout = () => {
  return (
    <>
      <JsStack
        screenOptions={{
          headerShown: false,
        }}
      />
    </>
  );
};

export default MenuLayout;
