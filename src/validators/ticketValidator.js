const { body, param } = require('express-validator');

const validateTicketAdd = [
    body('seats_allotted')
      .notEmpty()
      .escape()
      .isInt()
      .withMessage('seats_allotted is required and should be a Int')
      .isLength({ min: 1 })
      .withMessage('Full name must be at least 3 characters long'),
    body('user_id')
      .notEmpty()
      .escape()
      .isInt()
      .withMessage('user_id is required'),
    body('amount')
      .notEmpty()
      .escape()
      .withMessage('amount is required'),
    body('screen_id')
      .notEmpty()
      .escape()
      .withMessage('screen_id is required')   
  ];

  module.exports = validateTicketAdd;