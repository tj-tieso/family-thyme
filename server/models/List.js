const { Schema, model } = require("mongoose");
const itemSchema = require("./Item");

const listSchema = new Schema(
  {
    listName: {
      type: String,
      required: "You need to add list name!",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    items: [itemSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

listSchema.virtual("itemsCount").get(function () {
  return this.items.length;
});

const Lists = model("List", listSchema);

module.exports = Lists;
