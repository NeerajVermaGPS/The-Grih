const express = require('express');
const router = express.Router();
const { validationResult, checkSchema } = require("express-validator")
const { newsletterValidationSchema } = require('../validators/newsletterValidatorSchema');
const { handleSubscription } = require('../controller/newsletterControllers');

router.post('/subscribe', checkSchema(newsletterValidationSchema), (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
}, handleSubscription)

module.exports = router;