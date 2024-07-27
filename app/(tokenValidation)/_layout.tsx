import { Stack } from "expo-router";

const TokenLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TokenLayout;
