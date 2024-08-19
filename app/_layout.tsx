import { UserProvider } from "@/context/userContext";
import { useColorScheme } from "@/hooks/useColorScheme";
import { createApolloClient } from "@/utils/authUtil";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { persistCache } from "apollo3-cache-persist";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
import { Slot } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loadingCache, setLoadingCache] = useState(true);
  const [fontsLoaded] = useFonts({
    NunitoSans: require("../assets/fonts/nunto-sans.ttf"),
  });
  const [client, setClient] = useState<ApolloClient<any> | null>(null);

  useEffect(() => {
    const loadResources = async () => {
      const apolloClient = await createApolloClient();
      setClient(apolloClient);

      await persistCache({
        cache: apolloClient!.cache,
        storage: {
          getItem: AsyncStorage.getItem,
          setItem: AsyncStorage.setItem,
          removeItem: AsyncStorage.removeItem,
        },
      });
      setLoadingCache(false);
    };

    loadResources();
  }, []);

  useEffect(() => {
    if (!loadingCache && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [loadingCache, fontsLoaded]);

  if (!fontsLoaded || loadingCache || !client) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <UserProvider>
          <Slot />

          <Toast />
        </UserProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
