const { body, param } = require('express-validator');

const validateCityAdd = [
    body('city_name')
      .notEmpty()
      .escape()
      .isString()
      .withMessage('City name is required and should be a string')
      .isLength({ min: 1 })
      .withMessage('City name must be at least 3 characters long'),
    body('pincode')
      .notEmpty()
      .escape()
      .withMessage('Pincode is required'),
    body('state')
      .notEmpty()
      .escape()
      .withMessage('State is required'),
    
  ];

  module.exports = validateCityAdd;