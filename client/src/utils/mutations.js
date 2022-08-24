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
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
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

export const ADD_LIST = gql`
  mutation addList($listName: String!) {
    addList(listName: $listName) {
      _id
      listName
      createdAt
      itemsCount
      items {
        _id
      }
    }
  }
`;

export const REMOVE_LIST = gql`
  mutation RemoveItem($id: ID!) {
    removeItem(_id: $id) {
      _id
      itemDescription
    }
  }
`;


export const ADD_ITEM = gql`
  mutation addItem($listId: ID!, $itemDescription: String!, $quantity: Int!) {
    addItem(
      listId: $listId
      itemDescription: $itemDescription
      quantity: $quantity
    ) {
      _id
      itemsCount
      items {
        _id
        itemDescription
        quantity
      }
    }
  }
`;

export const REMOVE_ITEM = gql`
  mutation removeList($id: ID!) {
    removeList(_id: $id) {
      _id
      listName
      createdAt
      items {
        _id
        itemDescription
        quantity
      }
    }
  }
`;