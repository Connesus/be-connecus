const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { communityService } = require('../services');
const pick = require('../utils/pick');

const createCommunity = catchAsync(async (req, res) => {
  const post = await communityService.createCommunity(req.body);
  res.status(httpStatus.CREATED).send(post);
});

const getCommunities = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await communityService.queryCommunities(filter, options);
  res.send(result);
});

const getCommunity = catchAsync(async (req, res) => {
  const post = await communityService.getCommunityById(req.params.communityId);
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.send(post);
});

const updateCommunity = catchAsync(async (req, res) => {
  const post = await communityService.updateCommunityById(req.params.communityId, req.body);
  res.send(post);
});

const deleteCommunity = catchAsync(async (req, res) => {
  await communityService.deleteCommunityById(req.params.communityId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCommunity,
  getCommunities,
  getCommunity,
  updateCommunity,
  deleteCommunity,
};
