const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  post_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    trim: true,
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    trim: true,
  },
  content: {
    type: mongoose.Types.ObjectId,
    required: true,
    trim: true,
  },
  timestamps: true,
});

/**
 * @typedef Comment
 */
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
