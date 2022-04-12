const express = require('express');
const validate = require('../../middlewares/validate');
const commentVadidation = require('../../validations/comment.validation');
const commentController = require('../../controllers/comment.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(commentVadidation.createComment), commentController.createComment)
  .get(validate(commentVadidation.getComments), commentController.getComments);

router
  .route('/:commentId')
  .get(validate(commentVadidation.getComment), commentController.getComment)
  .patch(validate(commentVadidation.updateComment), commentController.updateComment)
  .delete(validate(commentVadidation.deleteComment), commentController.deleteComment);

module.exports = router;
