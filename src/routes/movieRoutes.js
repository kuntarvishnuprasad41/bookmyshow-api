const express = require('express');
const movieRoutes = require('express').Router();
const validateMovieAdd = require('../validators/movieValidator');
const validate = require('../validators/validate');
const {createMovie} = require('../controllers/movieController');

movieRoutes.use(express.json());
movieRoutes.get('/',createMovie);
movieRoutes.post('/',validateMovieAdd,validate,createMovie);

module.exports = movieRoutes;