const mongoose = require('mongoose');

const CommunitySchema = mongoose.Schema({
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true,
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
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  slug: {
    type: String,
    required: true,
  },
  timestamps: true,
});

/**
 * @typedef CommunitySchema
 */

module.exports = CommunitySchema;
