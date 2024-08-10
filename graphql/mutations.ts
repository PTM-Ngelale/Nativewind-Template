import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
  mutation VerifyOtp($email: String!, $otp: String!) {
    verifyOtp(email: $email, otp: $otp)
  }
`;

export const RESEND_EMAIL_OTP_MUTATION = gql`
  mutation GenerateOtp($email: String!) {
    generateOtp(where: { email: $email }, data: {}) {
      verificationOtp
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
