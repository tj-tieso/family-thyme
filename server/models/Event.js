const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const eventSchema = new Schema({
  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Please add a title',
  },
  // firstName: {
  //   type: String,
  // },
  date: {
    type: Date,
    default: Date.now,
    required: 'Must include a start date',
  },
  // dueDate: {
  //   type: Date,
  //   default: () => Date.now() + 1 * 24 * 60 * 60 * 1000,
  //   required: 'Must include a due date',
  // },
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
