const mongoose = require('mongoose');

const permissionsSchema = mongoose.Schema({
  type: {
    type: String,
    required: false,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  timestamps: true,
});

/**
 * @typedef Permissions
 */
const Permissions = mongoose.model('Permissions', permissionsSchema);

module.exports = Permissions;
