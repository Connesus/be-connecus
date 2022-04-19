const express = require('express');
const validate = require('../../middlewares/validate');
const tokenVadidation = require('../../validations/token.validation');
const tokenController = require('../../controllers/token.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(tokenVadidation.createToken), tokenController.createToken)
  .get(validate(tokenVadidation.getTokens), tokenController.getTokens);

router
  .route('/:tokenId')
  .get(validate(tokenVadidation.getToken), tokenController.getToken)
  .patch(validate(tokenVadidation.updateToken), tokenController.updateToken)
  .delete(validate(tokenVadidation.deleteToken), tokenController.deleteToken);

module.exports = router;
