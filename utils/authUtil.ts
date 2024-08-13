import { setContext } from "@apollo/client/link/context";
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
  split,
} from "@apollo/client";
import { getMainDefinition } from '@apollo/client/utilities';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Href, router } from "expo-router";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

// HTTP connection to the GraphQL API
const httpLink = createHttpLink({
  uri: "https://alarm-saas-backend-y2v2v.ondigitalocean.app/graphql",
});

// WebSocket link for subscriptions
const wsLink = new GraphQLWsLink(createClient({
  url: 'wss://alarm-saas-backend-y2v2v.ondigitalocean.app/graphql',
  connectionParams: async () => {
    const tokenData = await AsyncStorage.getItem("userToken");
    let authToken = "";
    if (tokenData) {
      const { token } = JSON.parse(tokenData);
      authToken = token ? `Bearer ${token}` : "";
    }
    return {
      headers: {
        Authorization: authToken,
      },
    };
  },
}));

// Middleware for setting the authorization header
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

// Apollo Client initialization
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

  // Using split to direct the operations to the correct link
  const link = split(
    // Split based on operation type
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink, // Use WebSocket link for subscriptions
    authLink.concat(httpLink), // Use HTTP link for queries and mutations
  );

  const cache = new InMemoryCache();
  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: "network-only",
    },
  };

  return new ApolloClient({
    link,
    cache,
    defaultOptions,
  });
};