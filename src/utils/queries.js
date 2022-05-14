import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query getUsers {
    users {
      _id
      firstName
      lastName
      userName
      email
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query getSingleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      firstName
      lastName
      userName
      email
    }
  }
`;
