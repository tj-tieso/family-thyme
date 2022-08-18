const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    email: String
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
    addUser(firstName: String!, email: String!, password: String!): User
  }
`;

module.exports = typeDefs;
