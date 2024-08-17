import { createHttpLink, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import * as SecureStore from "expo-secure-store";
import { getCurrentServerIdentifier } from "./authUtil"; // Import the function
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";

// HTTP connection to the GraphQL API
const httpLink = createHttpLink({
  uri: "https://alarm-saas-backend-y2v2v.ondigitalocean.app/graphql",
});

// Middleware to set the authorization header for HTTP requests
const authLink = setContext(async (_, { headers }) => {
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
      ...headers,
      Authorization: authToken ? authToken : "",
    },
  };
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

      console.log(authToken);
      return {
        headers: {
          Authorization: authToken,
        },
      };
    },
  })
);

// Using split to direct the operations to the correct link
export const link = split(
  // Split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink, // Use WebSocket link for subscriptions
  authLink.concat(httpLink)
);
