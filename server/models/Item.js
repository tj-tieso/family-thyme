const { Schema } = require("mongoose");

const itemSchema = new Schema(
  {
    itemDescription: {
      type: String,
      maxlength: 280,
    },
    quantity: {
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
