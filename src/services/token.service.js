const httpStatus = require('http-status');
const { Token } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a token
 * @param {Object} tokenBody
 * @return {Promise<Token>}
 */
const createToken = async (tokenBody) => {
  return Token.create(tokenBody);
};

/**
 * Query for token
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryTokens = async (filter, options) => {
  const tokens = await Token.paginate(filter, options);
  return tokens;
};

/**
 * Get token by id
 * @param {ObjectId} id
 * @return {Promise<Token>}
 */
const getTokenById = async (id) => {
  return Token.findById(id);
};

/**
 * Update token by id
 * @param {ObjectId} tokenId
 * @param {Object} updateBody
 * @return {Promise<Token>}
 */
const updateTokenById = async (tokenId, updateBody) => {
  const token = await getTokenById(tokenId);
  if (!token) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Token not ound');
  }
  Object.assign(token, updateBody);
  await token.save();
  return token;
};

/**
 * Delete token by id
 * @param {ObjectId} tokenId
 * @return {Promise<Token>}
 */
const deleteTokenById = async (tokenId) => {
  const token = await getTokenById(tokenId);
  if (!token) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Token not ound');
  }
  await token.remove();
  return token;
};

module.exports = {
  createToken,
  queryTokens,
  getTokenById,
  updateTokenById,
  deleteTokenById,
};
