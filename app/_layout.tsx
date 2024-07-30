import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { EmergencyProvider } from "@/context/EmergencyContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <EmergencyProvider>
        <Stack>
          {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
          {/* <Stack.Screen
            name="(tokenValidation)"
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen name="(auth)" options={{ headerShown: false }} /> */}
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* <Stack.Screen
            name="(modals)/Report"
            options={{
              presentation: "modal",
              headerShown: false,
              animation: "simple_push",
            }}
          />
          <Stack.Screen name="+not-found" /> */}
        </Stack>
      </EmergencyProvider>
    </ThemeProvider>
  );
}
