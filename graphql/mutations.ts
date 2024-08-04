import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
    }
  }
`;

export const FORGOT_PASSWORD_MUTATION = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const RESET_PASSWORD_MUTATION = gql`
  mutation resetPassword($email: String!, $password: String!, $token: String!) {
    resetPassword(email: $email, password: $password, token: $token)
  }
`;

export const UPDATE_PASSWORD_MUTATION = gql`
  mutation updatePassword($password: String!) {
    updatePassword(password: $password)
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
