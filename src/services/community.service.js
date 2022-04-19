const httpStatus = require('http-status');
const { Community } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a community
 * @param {Object} communityBody
 * @return {Promise<Comment>}
 */
const createCommunity = async (communityBody) => {
  return Community.create(communityBody);
};

/**
 * Query for community
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryCommunities = async (filter, options) => {
  const posts = await Community.p(filter, options);
  return posts;
};

/**
 * Get community by id
 * @param {ObjectId} id
 * @return {Promise<Comment>}
 */
const getCommunityById = async (id) => {
  return Community.findById(id);
};

/**
 * Update community by id
 * @param {ObjectId} communityId
 * @param {Object} updateBody
 * @return {Promise<Community>}
 */
const updateCommunityById = async (communityId, updateBody) => {
  const community = await getCommunityById(communityId);
  if (!community) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Community not ound');
  }
  Object.assign(communityId, updateBody);
  await community.save();
  return community;
};

/**
 * Delete community by id
 * @param {ObjectId} postId
 * @return {Promise<Community>}
 */
const deleteCommunityById = async (communityId) => {
  const community = await getCommunityById(communityId);
  if (!community) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Community not found');
  }
  await community.remove();
  return community;
};

module.exports = {
  createCommunity,
  queryCommunities,
  getCommunityById,
  updateCommunityById,
  deleteCommunityById,
};
