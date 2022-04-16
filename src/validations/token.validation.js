const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createToken = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    symbol: Joi.string().required(),
    logo: Joi.string().required(),
    user: Joi.string().custom(objectId),
    community: Joi.string().custom(objectId),
  }),
};

const getTokens = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getToken = {
  params: Joi.object().keys({
    tokenId: Joi.string().custom(objectId),
  }),
};

const updateToken = {
  params: Joi.object().keys({
    tokenId: Joi.string().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string().required(),
      symbol: Joi.string().required(),
      logo: Joi.string().required(),
      user: Joi.string().custom(objectId),
      community: Joi.string().custom(objectId),
    })
    .min(1),
};

const deleteToken = {
  params: Joi.object().keys({
    tokenId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createToken,
  getTokens,
  getToken,
  updateToken,
  deleteToken,
};
