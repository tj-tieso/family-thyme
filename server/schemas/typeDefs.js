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

  type List {
    _id: ID
    listName: String
    createdAt: Date
    username: String
    itemsCount: Int
    items: [Items]

  type Items {
    _id: ID
    itemDescription: String
    itemCount: Number
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(firstName: String!): User
    lists(username:String): [List]
    list(_id: ID!): List
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
    addList(listName: String!): List
    addItem(listId: ID!, listName: String!): List
  }
`;

module.exports = typeDefs;
