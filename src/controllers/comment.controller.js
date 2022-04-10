const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { postService } = require('../services');
const pick = require('../utils/pick');

const createComment = catchAsync(async (req, res) => {
  const post = await postService.createPost(req.body);
  res.status(httpStatus.CREATED).send(post);
});

const getComments = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await postService.queryUsers(filter, options);
  res.send(result);
});

const getComment = catchAsync(async (req, res) => {
  const post = await postService.getPostById(req.params.postId);
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.send(post);
});

const updateComment = catchAsync(async (req, res) => {
  const post = await postService.updatePostById(req.params.postId, req.body);
  res.send(post);
});

const deleteComment = catchAsync(async (req, res) => {
  await postService.deletePostById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
};
