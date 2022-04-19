const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createPost = {
  body: Joi.object().keys({
    user: Joi.string().custom(objectId),
    community: Joi.string().custom(objectId),
    status: Joi.boolean().required(),
    permissions: Joi.string().custom(objectId),
    content: Joi.string().required(),
    priority: Joi.boolean().required(),
    privacy: Joi.number().integer(),
    tags: Joi.array().items().custom(objectId),
    medias: Joi.array().items().custom(objectId),
    event: Joi.array().items().custom(objectId),
  }),
};

const getPosts = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPost = {
  params: Joi.object().keys({
    postId: Joi.string().custom(objectId),
  }),
};

const updatePost = {
  params: Joi.object().keys({
    postId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      status: Joi.boolean().required(),
      permissions: Joi.string().custom(objectId),
      content: Joi.string().required(),
      priority: Joi.boolean().required(),
      privacy: Joi.number().integer(),
      tags: Joi.array().items().custom(objectId),
      medias: Joi.array().items().custom(objectId),
      event: Joi.array().items().custom(objectId),
    })
    .min(1),
};

const deletePost = {
  params: Joi.object().keys({
    postId: Joi.required().custom(objectId),
  }),
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
