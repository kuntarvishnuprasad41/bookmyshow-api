const { body, param } = require('express-validator');

const validateScreenAdd = [
    body('screen_ref')
      .notEmpty()
      .escape()
      .isString()
      .withMessage('Screen Reference ID is needed')
      .isLength({ min: 1 })
      .withMessage('Screen Reference ID 1  characters long'),
    body('seats_available')
      .notEmpty()
      .escape()
      .withMessage('Seats available is required'),
    body('theater_id')
      .notEmpty()
      .escape()
      .withMessage('Theater id is required'),
    body('show_timings')
      .notEmpty()
      .escape()
      .withMessage('show_timings is required'),
    body('show_date')
      .notEmpty()
      .escape()
      .withMessage('show_date is required'),
    body('movie_id')
      .notEmpty()
      .escape()
      .withMessage('movie_id is required')  
  ];

  module.exports = validateScreenAdd;