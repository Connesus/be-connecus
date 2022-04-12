const mongoose = require('mongoose');
const { roles } = require('../config/roles');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    display_name: {
      type: String,
      required: true,
      trim: true,
    },
    nonce: {
      type: String,
      required: true,
      default: Math.floor(Math.random() * 1000000),
    },
    passport_id: {
      type: String,
      required: false,
      trim: true,
    },
    passport_type: {
      type: String,
      required: false,
    },
    public_bc_key: {
      type: String,
      required: false,
      trim: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_active: {
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
