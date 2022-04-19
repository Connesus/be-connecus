const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

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
    userTags: {
      type: mongoose.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    commentReply: {
      type: mongoose.Types.ObjectId,
      required: false,
      ref: 'Comment',
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
commentSchema.plugin(toJSON);
commentSchema.plugin(paginate);

/**
 * @typedef Comment
 */
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
