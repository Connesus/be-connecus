const mongoose = require('mongoose');

const CommunitySchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnail: {
    type: String,
    required: true,
    trim: true,
  },
  avatar: {
    type: String,
    required: true,
    trim: true,
  },
  conver_image: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  privacy: {
    type: Number,
    required: true,
  },
  token: {
    type: mongoose.Types.ObjectId,
    ref: 'Token',
    required: true,
  },
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  timestamps: true,
});

/**
 * @typedef CommunitySchema
 */

module.exports = CommunitySchema;
