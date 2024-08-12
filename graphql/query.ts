import { gql } from "@apollo/client";

// Query to get basic user information
export const GetUserBasicInfoQuery = gql`
  query GetUserBasicInfo {
    getCurrentUser {
      id
      firstName
      lastName
      profilePhoto
      nextOfKinName
      nextOfKinContact
    }
  }
`;

// Query to get user email only
export const GetUserEmailQuery = gql`
  query GetUserEmail {
    getCurrentUser {
      email
      id
    }
  }
`;

// Query to get full user information
export const GetUserFullInfoQuery = gql`
  query GetUserFullInfo {
    getCurrentUser {
      id
      firstName
      lastName
      email
    }
  }
`;

export const GetAllAlerts = gql`
  query listAlerts {
    listAlerts {
      emergency
      latitude
      longitude
      id
      address
      createdAt
    }
  }
`;

export const GetUserAlerts = gql`
  query listUserAlerts($where: AlertWhereInput) {
    listAlerts(where: $where) {
      emergency
      latitude
      longitude
      address
      id
      createdAt
    }
  }
`;
