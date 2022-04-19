const mongoose = require('mongoose');

const eventSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: false,
      trim: true,
    },
    description: {
      type: String,
      required: false,
      trim: true,
    },
    date: {
      type: Object,
      required: false,
    },
    community: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Community',
    },
  },
  { timestamps: true }
);

/**
 * @typedef Event
 */
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
