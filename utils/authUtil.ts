import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  DefaultOptions,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import * as SecureStore from "expo-secure-store";
import { Href, router } from "expo-router";

// Static server identifiers
const SERVER_IDENTIFIERS = {
  development: "devServer",
  staging: "stagingServer",
  production: "prodServer",
};

// Function to get the current server identifier based on the environment
export const getCurrentServerIdentifier = () => {
  // Replace with your environment detection logic if needed
  if (__DEV__) {
    return SERVER_IDENTIFIERS.development; // Expo development mode
  } else if (process.env.STAGING) {
    return SERVER_IDENTIFIERS.staging; // Staging environment
  } else {
    return SERVER_IDENTIFIERS.production; // Production environment
  }
};

// HTTP connection to the GraphQL API
const httpLink = createHttpLink({
  uri: "https://alarm-saas-backend-y2v2v.ondigitalocean.app/graphql",
});

// WebSocket link for subscriptions
const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://alarm-saas-backend-y2v2v.ondigitalocean.app/graphql",
    connectionParams: async () => {
      const tokenData = await SecureStore.getItemAsync("alarmixToken");
      let authToken = "";
      if (tokenData) {
        const { token, serverIdentifier } = JSON.parse(tokenData);
        const currentServerIdentifier = getCurrentServerIdentifier();
        authToken =
          serverIdentifier === currentServerIdentifier ? `Bearer ${token}` : "";
      }
      return {
        headers: {
          Authorization: authToken,
        },
      };
    },
  })
);

// Middleware for setting the authorization header
export const createAuthLink = (userToken: string) => {
  const serverIdentifier = getCurrentServerIdentifier(); // Get the current server identifier
  return setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${userToken}`,
        "X-Server-Identifier": serverIdentifier, // Add server identifier to headers
      },
    };
  });
};

// Apollo Client initialization
export const createApolloClient = async () => {
  try {
    const tokenData = await SecureStore.getItemAsync("alarmixToken");
    let userToken = "";

    if (tokenData) {
      try {
        const { token, expiration, serverIdentifier } = JSON.parse(tokenData);
        const currentTime = new Date().getTime();
        const currentServerIdentifier = getCurrentServerIdentifier();
        console.log("Stored Token Data:", tokenData);
        console.log("Current Server Identifier:", currentServerIdentifier);
        if (
          currentTime < expiration &&
          serverIdentifier === currentServerIdentifier
        ) {
          userToken = token;
        } else {
          // Token has expired or server mismatch, handle accordingly
          await SecureStore.deleteItemAsync("alarmixToken");
          router.replace("/(auth)/Login" as Href<string>);
        }
      } catch (error) {
        await SecureStore.deleteItemAsync("alarmixToken");
        router.replace("/(auth)/Login" as Href<string>);
      }
    } else {
      // Handle case where tokenData is null (e.g., first login)
      console.log("No token found, please log in.");
    }

    const authLink = createAuthLink(userToken);

    // Using split to direct the operations to the correct link
    const link = split(
      // Split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink, // Use WebSocket link for subscriptions
      authLink.concat(httpLink) // Use HTTP link for queries and mutations
    );

    const defaultOptions: DefaultOptions = {
      watchQuery: {
        fetchPolicy: "network-only",
      },
    };

    return new ApolloClient({
      link,
      defaultOptions,
      cache: new InMemoryCache(),
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const resetApolloClient = async (client: ApolloClient<any>) => {
  try {
    await client.resetStore(); // This clears the cache and triggers a refetch
    console.log("Apollo Client cache reset successfully.");
  } catch (error) {
    console.error("Error resetting Apollo Client cache:", error);
  }
};
