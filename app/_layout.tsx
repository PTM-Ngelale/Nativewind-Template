import { UserProvider } from "@/context/userContext";
import { useColorScheme } from "@/hooks/useColorScheme";
import { createApolloClient } from "@/utils/authUtil";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { persistCache } from "apollo3-cache-persist";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
import { Slot } from "expo-router";
import SplashScreenView from "@/components/splashscreen";
import { useApolloStore } from "@/store/apolloStore";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loadingCache, setLoadingCache] = useState(true);
  const [fontsLoaded] = useFonts({
    NunitoSans: require("../assets/fonts/nunto-sans.ttf"),
  });
  const apolloClientRef = useRef<ApolloClient<any> | null>(null); // Ref to hold the Apollo Client
  const setClient = useApolloStore((state) => state.setClient);
  // Function to initialize Apollo Client
  const initializeApolloClient = async () => {
    const newClient = await createApolloClient();
    await newClient!.clearStore(); // This ensures no stale data is carried over
    await newClient!.cache.reset(); // Just in case, reset the cache too
    apolloClientRef.current = newClient;
    setClient(apolloClientRef.current);
    setLoadingCache(false);
    await SplashScreen.hideAsync();
  };


  // Call the initialization function immediately
  initializeApolloClient();

  if (!fontsLoaded || loadingCache || !apolloClientRef.current) {
    return <SplashScreenView />; // Render the splash screen while loading
  }

  return (
    <ApolloProvider client={apolloClientRef.current}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <UserProvider>
          <Slot />
          <Toast />
        </UserProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
