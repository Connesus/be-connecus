const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const tokenSchema = mongoose.Schema({
  token_name: {
    type: String,
    required: false,
    trim: true,
  },
  symbol: {
    type: String,
    required: false,
    trim: true,
  },
  logo: {
    type: String,
    required: false,
    trim: true,
  },
  timestamps: true,
  user: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  ],
  community: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'Community',
  },
});

// add plugin that converts mongoose to json
tokenSchema.plugin(toJSON);

/**
 * @typedef Token
 */
const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
