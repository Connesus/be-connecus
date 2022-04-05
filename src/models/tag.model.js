const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
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
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],
  timestamps: true,
});

/**
 * @typedef Tag
 */
const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
