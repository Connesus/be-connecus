const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createComment = {
  body: Joi.object().keys({
    post: Joi.string().custom(objectId),
    user: Joi.string().custom(objectId),
    content: Joi.string().required(),
    userTags: Joi.string().custom(objectId),
    commentReply: Joi.string().custom(objectId),
  }),
};

const getComments = {
  query: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
};

const getComment = {
  params: Joi.object().keys({
    commentId: Joi.string().custom(objectId),
  }),
};

const updateComment = {
  params: Joi.object().keys({
    commentId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      content: Joi.string().required(),
      userTags: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteComment = {
  params: Joi.object().keys({
    commentId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createComment,
  getComments,
  getComment,
  updateComment,
  deleteComment,
};
