import SplashScreenView from "@/components/splashscreen";
import { UserProvider } from "@/context/userContext";
import { useColorScheme } from "@/hooks/useColorScheme";
import { client } from "@/utils/client";
import { ApolloProvider } from "@apollo/client";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    NunitoSans: require("../assets/fonts/nunto-sans.ttf"),
  });

  if (!fontsLoaded) {
    return <SplashScreenView />;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <UserProvider>
          <SafeAreaProvider>
            <Slot />
          </SafeAreaProvider>
          <Toast />
        </UserProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
