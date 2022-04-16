const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { tokenService } = require('../services');
const pick = require('../utils/pick');

const createToken = catchAsync(async (req, res) => {
  const token = await tokenService.createToken(req.body);
  res.status(httpStatus.CREATED).send(token);
});

const getTokens = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await tokenService.queryTokens(filter, options);
  res.send(result);
});

const getToken = catchAsync(async (req, res) => {
  const token = await tokenService.getTokenById(req.params.tokenId);
  if (!token) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.send(token);
});

const updateToken = catchAsync(async (req, res) => {
  const token = await tokenService.updateToken(req.params.tokenId, req.body);
  res.send(token);
});

const deleteToken = catchAsync(async (req, res) => {
  await tokenService.deleteToken(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createToken,
  getTokens,
  getToken,
  updateToken,
  deleteToken,
};
