const mongoose = require('mongoose');
const { roles } = require('../config/roles');

const userSchema = mongoose.Schema(
  {
    accountId: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    displayName: {
      type: String,
      required: true,
      trim: true,
    },
    passportId: {
      type: String,
      required: false,
      trim: true,
    },
    passportType: {
      type: String,
      required: false,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
    role: {
      type: String,
      enum: roles,
      default: 'user',
    },
    avatar: {
      type: mongoose.Types.ObjectId,
      required: false,
      ref: 'Avatar',
    },
    token: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Token',
      },
    ],
    community: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'Community',
      },
    ],
  },
  { timestamps: true }
);

/**
 * @typedef User
 */
const User = mongoose.model('User', userSchema);

module.exports = User;
