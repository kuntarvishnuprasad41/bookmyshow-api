const { body, param } = require('express-validator');

const validateRegister = [
    body('firstName')
      .notEmpty()
      .escape()
      .isString()
      .withMessage('Full name is required and should be a string')
      .isLength({ min: 3 })
      .withMessage('Full name must be at least 3 characters long'),
    body('middleName')
      .notEmpty()
      .escape()
      .isString()
      .withMessage('Full name is required and should be a string')
      .isLength({ min: 3 })
      .withMessage('Full name must be at least 3 characters long'),
    body('lastName')
      .notEmpty()
      .escape()
      .isString()
      .withMessage('Full name is required and should be a string')
      .isLength({ min: 3 })
      .withMessage('Full name must be at least 3 characters long'),
    body('email')
      .notEmpty()
      .escape()
      .withMessage('Email is required')
      .isEmail()
      .withMessage('Invalid email address'),
    body('mobile')
      .notEmpty()
      .escape()
      .withMessage('Mobile is required')
      .isLength({min:12})
      .withMessage('Invalid email address'),
    body('password')
      .notEmpty()
      .escape()
      .withMessage('Password is required')
      .isStrongPassword()
      .withMessage(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character'
      ),
    body('confirmPassword').notEmpty()
    .escape()
    .withMessage('Password is required')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }
      return true;
    }),
  
  ];

  module.exports = validateRegister;