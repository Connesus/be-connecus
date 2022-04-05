const mongoose = require('mongoose');

const linkSchema = mongoose.Schema({
  community_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    trim: true,
  },
  platform: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: false,
    trim: true,
  },
  timestamps: true,
});

/**
 * @typedef Link
 */
const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
