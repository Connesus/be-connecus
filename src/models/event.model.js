const mongoose = require('mongoose');

//! Như 1 bài post bình thường và sẽ có time
const eventSchema = mongoose.Schema({
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
  timestamps: true,
  community: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Community',
  },
});

/**
 * @typedef Event
 */
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
