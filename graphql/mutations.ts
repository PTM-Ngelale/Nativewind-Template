import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation loginUser(
    $email: String!
    $password: String!
    $deviceName: String!
    $deviceModel: String!
    $pushToken: String
  ) {
    loginUser(
      email: $email
      password: $password
      deviceName: $deviceName
      deviceModel: $deviceModel
      pushToken: $pushToken
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

export const DEVICE_CHANGE_MUTATION = gql`
  mutation VerifyDeviceChange(
    $email: String!
    $otp: String!
    $deviceName: String!
    $deviceModel: String!
    $expoPushToken: String!
  ) {
    verifyDeviceChange(
      deviceName: $deviceName
      deviceModel: $deviceModel
      pushToken: $expoPushToken
      email: $email
      otp: $otp
    ) {
      email
    }
  }
`;

//Alerts
export const CREATE_ALERT_MUTATION = gql`
  mutation CreateAlert($data: AlertCreateInput!) {
    createAlert(data: $data) {
      alert {
        id
        emergency
        latitude
        longitude
        address
      }
      totalNotified
    }
  }
`;

//Chats
export const CREATE_CHAT_MUTATIon = gql`
  mutation CreateChat($data: ChatCreateInput!) {
    createChat(data: $data) {
      id
      message
      timestamp
      imageUrl
      user {
        firstName
        lastName
        profilePhoto
      }
    }
  }
`;

export const UPDATE_SINGLE_FILES = gql`
  mutation uploadFile($data: Upload!) {
    uploadFile(file: $data)
  }
`;
