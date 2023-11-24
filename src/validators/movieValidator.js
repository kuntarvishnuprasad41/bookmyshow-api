const { body, param } = require('express-validator');

const validateMovieAdd = [
    body('name')
      .notEmpty()
      .escape()
      .isString()
      .withMessage('Full name is required and should be a string')
      .isLength({ min: 1 })
      .withMessage('Full name must be at least 3 characters long'),
    body('censor_certificate_type')
      .notEmpty()
      .escape()
      .withMessage('Censor Cert is required'),
    body('language')
      .notEmpty()
      .escape()
      .withMessage('Langauge is required'),
    body('release_date')
      .notEmpty()
      .escape()
      .withMessage('Password is required')  
  ];

  module.exports = validateMovieAdd;