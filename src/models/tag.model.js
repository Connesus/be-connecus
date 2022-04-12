const mongoose = require('mongoose');

const tagSchema = mongoose.Schema(
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
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  { timestamps: true }
);

/**
 * @typedef Tag
 */
const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
