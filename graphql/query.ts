import { gql } from "@apollo/client";

// Query to get basic user information
export const GetUserBasicInfoQuery = gql`
  query GetCurrentUser {
    getCurrentUser {
      id
      firstName
      lastName
      profilePhoto
    }
  }
`;

// Query to get user email only
export const GetUserEmailQuery = gql`
  query GetCurrentUser {
    getCurrentUser {
      email
    }
  }
`;

// Query to get full user information
export const GetUserFullInfoQuery = gql`
  query GetCurrentUser {
    getCurrentUser {
      id
      firstName
      lastName
      email
    }
  }
`;
