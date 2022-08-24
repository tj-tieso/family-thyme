import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($firstName: String!) {
    user(firstName: $firstName) {
      _id
      firstName
      email
      events {
        _id
        title
        firstName
        startDate
        dueDate
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      firstName
      email
      events {
        _id
        title
        firstName
        startDate
        dueDate
      }
    }
  }
`;

export const QUERY_LISTS = gql`
  query lists($firstName: String) {
    lists(firstName: $firstName) {
      _id
      listName
      createdAt
      itemsCount
      items {
        _id
        itemDescription
        quantity
      }
    }
  }
`;
export const QUERY_LIST = gql`
  query list($id: ID!) {
    list(_id: $id) {
      _id
      listName
      createdAt
      itemsCount
      items {
        _id
        itemDescription
        quantity
      }
    }
  }
`;

export const QUERY_EVENT = gql`
  query event($id: ID!) {
    event(_id: $id) {
      _id
      title
      firstName
      startDate
      dueDate
    }
  }
`;
