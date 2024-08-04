import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

const httpLink = createHttpLink({
  uri: "http://localhost:9090/graphql",
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
  const userToken = await AsyncStorage.getItem("userToken");
  const authLink = createAuthLink(userToken || "");

  const cache = new InMemoryCache();
  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  };

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    defaultOptions,
  });
};
