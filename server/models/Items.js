const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const itemSchema = new Schema(
  {
    itemDescription: {
      type: String,
      maxlength: 280,
    },
    itemCount: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = itemSchema;
