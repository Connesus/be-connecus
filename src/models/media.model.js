const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
  type: {
    type: String,
    required: false,
    trim: true,
  },
  link: {
    type: String,
    required: false,
    trim: true,
  },
  timestamps: true,
});

/**
 * @typedef Media
 */
const Media = mongoose.model('Link', mediaSchema);

module.exports = Media;
