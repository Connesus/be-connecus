const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  post: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Post',
  },
  user: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  content: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  timestamps: true,
});

/**
 * @typedef Comment
 */
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
