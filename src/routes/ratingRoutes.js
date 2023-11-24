const express = require('express');
const ratingRoutes = require('express').Router();
const validateRatingAdd = require('../validators/ratingValidator');
const validate = require('../validators/validate');
const {createRating} = require('../controllers/ratingController');

ratingRoutes.use(express.json());
ratingRoutes.get('/',createRating);
ratingRoutes.post('/',validateRatingAdd,validate,createRating);

module.exports = ratingRoutes;