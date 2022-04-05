const mongoose = require('mongoose');

const avatarSchema = mongoose.Schema({
  image: {
    type: String,
    required: false,
    trim: true,
  },
  nft_hash: {
    type: String,
    required: false,
    trim: true,
  },
  timestamps: true,
});

/**
 * @typedef Avatar
 */
const Avatar = mongoose.model('Link', avatarSchema);

module.exports = Avatar;
