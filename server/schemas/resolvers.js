const { User, Event, List } = require("../models");
const { GraphQLScalarType, Kind } = require("graphql");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

const resolvers = {
  Date: dateScalar,
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("events");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (parent, { firstName }) => {
      return User.findOne({ firstName })
        .select("-__v -password")
        .populate("events");
    },
    lists: async (parent, { username }) => {
      const params = username ? { username } : {};
      return List.find(params).sort({ createdAt: -1 });
    },
    list: async (parent, { _id }) => {
      return List.findOne({ _id });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError('Not logged in');
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addEvent: async (parent, args, context) => {
      if (context.user) {
        const event = await Event.create({
          ...args,
        });
        console.log(event);

        await User.findOneAndUpdate(
          { firstName: args.firstName },
          { $push: { events: event._id } },
          { new: true }
        );

        return event;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addList: async (parent, args, context) => {
      if (context.user) {
        const list = await List.create({
          ...args,
        });
        await User.findByIdAndUpdate(
          {
            _id: context.user._id,
          },
          {
            $push: { lists: list._id },
          },
          { new: true }
        );

        return list;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addItem: async (
      parent,
      { listId, itemDescription, noOfCount },
      context
    ) => {
      if (context.user) {
        const updatedList = await List.findOneAndUpdate(
          { _id: listId },
          {
            $push: {
              items: { itemDescription, noOfCount },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedList;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    deleteEvent: async (parent, { _id }, context) => {
      if (context.user) {
        const event = await Event.findById({ _id });

        if (event) {
          return await Event.findOneAndDelete({ _id });
        }
        throw new AuthenticationError('No Event with that Id was found!');
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    updateEvent: async (parent, args, context) => {
      console.log(args);
      if (context.user) {
        return await Event.findByIdAndUpdate(args._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError('Not logged in');
    },
  },
};

module.exports = resolvers;
