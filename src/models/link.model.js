const mongoose = require('mongoose');

const linkSchema = mongoose.Schema(
  {
    platform: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: false,
      trim: true,
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
 * @typedef Link
 */
const Link = mongoose.model('Link', linkSchema);

module.exports = Link;
