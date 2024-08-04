import { UserProvider } from "@/context/userContext";
import useAuth from "@/hooks/useAuth";
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
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import Toast from "react-native-toast-message";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loadingCache, setLoadingCache] = useState(true);
  const [fontsLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  const [initialRoute, setInitialRoute] = useState<string | null>("/");
  const [client, setClient] = useState<ApolloClient<any> | null>(null);
  const { isLoading: authLoading, userToken } = useAuth();

  useEffect(() => {
    const loadResources = async () => {
      const apolloClient = await createApolloClient();
      setClient(apolloClient);

      await persistCache({
        cache: apolloClient.cache,
        storage: AsyncStorage,
      });

      setLoadingCache(false);
    };

    loadResources();
  }, []);

  useEffect(() => {
    if (!authLoading && !loadingCache && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [authLoading, loadingCache, fontsLoaded, userToken]);

  if (
    authLoading ||
    !fontsLoaded ||
    loadingCache ||
    initialRoute === null ||
    !client
  ) {
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
