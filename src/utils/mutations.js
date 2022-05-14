import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!) {
    addUser(userName: $userName, email: $email, password: $password) {
      _id
      firstName
      lastName
      userName
      email
      password
    }
  }
`;

export const ADD_FAVORITETEAM = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
