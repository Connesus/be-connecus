const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
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
      type: String,
      required: true,
    },
    // tag other user in comment
    user_tags: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    // reply any comment
    comment_reply: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: 'Comment',
    },
  },
  { timestamps: true }
);

/**
 * @typedef Comment
 */
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
