const { body, param } = require('express-validator');

const validateTheaterAdd = [
    body('name')
      .notEmpty()
      .escape()
      .isString()
      .withMessage('Theater name is required and should be a string')
      .isLength({ min: 3 })
      .withMessage('Theater name must be at least 3 characters long'),
    body('address')
      .notEmpty()
      .escape()
      .withMessage('address is required'),
    body('phone')
      .notEmpty()
      .escape()
      .withMessage('Phone number is required'),
    body('email')
      .notEmpty()
      .escape()
      .withMessage('email is required')
      .isEmail()
      .withMessage('Invalid email address'),
    body('city_id')
      .notEmpty()
      .escape()
      .withMessage('city_id is required')  
  ];

  module.exports = validateTheaterAdd;