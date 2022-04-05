const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
  description: {
    type: String,
    required: false,
    trim: true,
  },
  timestamps: true,
});

/**
 * @typedef Event
 */
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
