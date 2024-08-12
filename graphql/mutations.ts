import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation loginUser(
    $email: String!
    $password: String!
    $deviceName: String!
    $deviceModel: String!
    $expoPushToken: String!
  ) {
    loginUser(
      email: $email
      password: $password
      deviceName: $deviceName
      deviceModel: $deviceModel
      pushToken: $expoPushToken
    ) {
      token
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation CreateUser($data: UserCreateInput!) {
    registerUser(data: $data) {
      firstName
      lastName
      id
      token
      assignedTo
      email
    }
  }
`;

export const VERIFY_OTP_MUTATION = gql`
  mutation VerifyUserAccountOtp($email: String!, $otp: String!) {
    verifyUserAccountOtp(email: $email, otp: $otp) {
      email
      id
    }
  }
`;

export const RESEND_EMAIL_OTP_MUTATION = gql`
  mutation GenerateOtp($email: String!) {
    generateOtp(where: { email: $email }, data: {}) {
      email
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
    updateUser(where: $where, data: $data) {
      id
      firstName
      lastName
      profilePhoto
    }
  }
`;

//Alerts
export const CREATE_ALERT_MUTATION = gql`
  mutation CreateAlert($data: AlertCreateInput!) {
    createAlert(data: $data) {
      id
      emergency
      latitude
      longitude
    }
  }
`;
