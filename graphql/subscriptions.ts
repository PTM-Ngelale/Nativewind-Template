import { gql } from "@apollo/client";


export const CREATE_CHAT_SUBSCRIPTIN = gql`
subscription ChatCreated {
  chatCreated {
    id
    message
    timestamp
    user {
      id
      firstName
      lastName
      profilePhoto
    }
    alertId
  }
}

`