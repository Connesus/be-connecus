const express = require('express');
const validate = require('../../middlewares/validate');
const communityVadidation = require('../../validations/community.validation');
const communityController = require('../../controllers/community.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(communityVadidation.createCommunity), communityController.createCommunity)
  .get(validate(communityVadidation.getCommunities), communityController.getCommunities);

router
  .route('/:commentId')
  .get(validate(communityVadidation.getCommunity), communityController.getCommunity)
  .patch(validate(communityVadidation.updateCommunity), communityController.updateCommunity)
  .delete(validate(communityVadidation.deleteCommunity), communityController.deleteCommunity);

module.exports = router;
