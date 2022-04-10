const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  community: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Community',
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  permissions: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Permissions',
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
  medias: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Media',
    },
  ],
  event: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comments',
    },
  ],
  timestamps: true,
});

/**
 * @typedef Post
 */
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
