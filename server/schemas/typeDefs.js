const { gql } = require('apollo-server-express');

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

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(firstName: String!): User
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
  }
`;

module.exports = typeDefs;
