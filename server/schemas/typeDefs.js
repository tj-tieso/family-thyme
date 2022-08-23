const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Date

  type User {
    _id: ID
    firstName: String
    email: String
    events: [Event]
  }

  type Event {
    _id: ID
    title: String
    firstName: String
    startDate: Date
    dueDate: Date
  }

  type Lists {
    _id: ID
    listName: String
    createdAt: String
    itemsCount: Int
    items: [Item]
  }

  type Item {
    _id: ID
    itemDescription: String
    itemCount: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(firstName: String!): User
    lists(firstName: String!): [Lists]
    list(_id: ID!): Lists
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, email: String!, password: String!): Auth
    addEvent(
      title: String!
      firstName: String!
      startDate: Date!
      dueDate: Date!
    ): Event
    addList(listName: String!): Lists
    addItem(listId: ID!, itemDescription: String!, itemCount: Int!): Lists
    removeItem(itemId: ID!): Lists
  }
`;

module.exports = typeDefs;
