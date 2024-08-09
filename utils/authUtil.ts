import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const userToken = await AsyncStorage.getItem("userToken");
  const authLink = createAuthLink(userToken || "");

  const cache = new InMemoryCache();
  const defaultOptions: DefaultOptions = {
    watchQuery: {
       fetchPolicy: 'network-only',
    },
  };

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    defaultOptions,
  });
};
