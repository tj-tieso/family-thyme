const { gql } = require('apollo-server-express');

// change all Event Dates to string
// removed scalar Date from top
// removed dueDate from addEvent mutation
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
    date: String
    firstName: String
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
    quantity: Int
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
    items: [Item]
    item(_id: ID!): Item
    events: [Event]
    event(_id: ID!): Event
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addUser(firstName: String!, email: String!, password: String!): Auth
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User

    addEvent(title: String!, date: String!): Event

    deleteEvent(_id: ID!): Event

    updateEvent(_id: ID!, title: String, firstName: String, date: String): Event

    addList(listName: String!): Lists
    removeList(_id: ID!): Lists
    updateList(_id: ID!, listName: String, createdAt: Date): Lists
    addItem(listId: ID!, itemDescription: String!, quantity: Int!): Lists
    removeItem(_id: ID!): Item
  }
`;

module.exports = typeDefs;
