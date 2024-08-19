// Static server identifiers
export const SERVER_IDENTIFIERS = {
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
