const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ItemSchema = new Schema(
  {
    itemDescription: {
      type: String,
      required: true,
      maxlength: 280,
    },
    itemCount: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = reactionSchema;
