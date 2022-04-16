const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { commentService } = require('../services');
const pick = require('../utils/pick');

const createComment = catchAsync(async (req, res) => {
  const post = await commentService.createComment(req.body);
  res.status(httpStatus.CREATED).send(post);
});

const getComments = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await commentService.queryComments(filter, options);
  res.send(result);
});

const getComment = catchAsync(async (req, res) => {
  const post = await commentService.getCommentById(req.params.commentId);
  if (!post) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
  }
  res.send(post);
});

const updateComment = catchAsync(async (req, res) => {
  const post = await commentService.updateCommentById(req.params.commentId, req.body);
  res.send(post);
});

const deleteComment = catchAsync(async (req, res) => {
  await commentService.deleteCommentById(req.params.commentId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
};
