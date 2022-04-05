const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    trim: true,
  },
  community_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    trim: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  permissions: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: false,
    trim: true,
  },
  video: {
    type: String,
    required: false,
    trim: true,
  },
  content: {
    type: String,
    required: false,
    trim: true,
  },
  priority: {
    type: Boolean,
    required: false,
    default: false,
  },
  privacy: {
    type: Number,
    required: true,
  },
  is_pined: {
    type: Boolean,
    required: false,
    default: false,
  },
  pined_at: {
    type: Date,
    required: false,
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag',
    },
  ],
  event: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
  timestamps: true,
});

/**
 * @typedef Post
 */
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
