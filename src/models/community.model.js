const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const communitySchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    thumbnail: {
      type: String,
      required: false,
      trim: true,
    },
    avatar: {
      type: String,
      required: true,
      trim: true,
    },
    convertImage: {
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
      required: false,
    },
    slug: {
      type: String,
      required: true,
    },
    users: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
communitySchema.plugin(toJSON);
communitySchema.plugin(paginate);

/**
 * @typedef Community
 */
const Community = mongoose.model('Community', communitySchema);

module.exports = Community;
