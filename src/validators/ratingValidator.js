const { body, param } = require('express-validator');

const validateRatingAdd = [
    body('movie_id')
      .notEmpty()
      .escape()
      .isInt()
      .withMessage('movie_id is required and should be a Int')
      .isLength({ min: 1 })
      .withMessage('Full name must be at least 3 characters long'),
    body('user_id')
      .notEmpty()
      .escape()
      .isInt()
      .withMessage('user_id is required'),
    body('rating')
      .notEmpty()
      .escape()
      .withMessage('rating is required')  
  ];

  module.exports = validateRatingAdd;