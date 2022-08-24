import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent(
    $title: String!
    $firstName: String!
    $startDate: Date!
    $dueDate: Date!
  ) {
    addEvent(
      title: $title
      firstName: $firstName
      startDate: $startDate
      dueDate: $dueDate
    ) {
      title
      firstName
      startDate
      dueDate
    }
  }
`;
