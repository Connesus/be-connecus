const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const tokenSchema = mongoose.Schema(
  {
    name: {
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
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
tokenSchema.plugin(toJSON);
tokenSchema.plugin(paginate);

/**
 * @typedef Token
 */
const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
