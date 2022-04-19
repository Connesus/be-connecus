const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCommunity = {
  body: Joi.object().keys({
    owner: Joi.string().custom(objectId),
    avatar: Joi.string().required(),
    convertImage: Joi.string().required(),
    description: Joi.string().required(),
    privacy: Joi.number().required(),
    token: Joi.string().custom(objectId),
    slug: Joi.string().required(),
  }),
};

const getCommunities = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCommunity = {
  params: Joi.object().keys({
    communityId: Joi.string().custom(objectId),
  }),
};

const updateCommunity = {
  params: Joi.object().keys({
    communityId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      thumbnail: Joi.string().required(),
      avatar: Joi.string().required(),
      convertImage: Joi.string().required(),
      description: Joi.string().required(),
      privacy: Joi.number().required(),
      token: Joi.string().custom(objectId),
      slug: Joi.string().required(),
    })
    .min(1),
};

const deleteCommunity = {
  params: Joi.object().keys({
    communityId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCommunity,
  getCommunities,
  getCommunity,
  updateCommunity,
  deleteCommunity,
};
