import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Href, router } from "expo-router";

const httpLink = createHttpLink({
  uri: "https://alarm-saas-backend-y2v2v.ondigitalocean.app/graphql",
});

export const createAuthLink = (userToken: string) => {
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${userToken}`,
      },
    };
  });
};

export const createApolloClient = async () => {
  const tokenData = await AsyncStorage.getItem("userToken");
  let userToken = "";

  if (tokenData) {
    try {
      const { token, expiration } = JSON.parse(tokenData);
      const currentTime = new Date().getTime();

      if (currentTime < expiration) {
        userToken = token;
      } else {
        // Token has expired, handle accordingly (i.e., redirect to login)
        await AsyncStorage.removeItem("userToken");
        router.replace("/(auth)/Login" as Href<string>);
      }
    } catch (error) {
      await AsyncStorage.removeItem("userToken");
      router.replace("/(auth)/Login" as Href<string>);
    }
  }

  const authLink = createAuthLink(userToken);

  const cache = new InMemoryCache();
  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: "network-only",
    },
  };

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    defaultOptions,
  });
};
