const express = require('express');
const { getTheaters, postTheaters } = require('../controllers/theaterController');
const validateTheaterAdd = require('../validators/theaterValidator');
const { validationResult } = require('express-validator');
const handleValidation = require('../validators/validate');
const theaterRoutes = express.Router();


theaterRoutes.use(express.json());

theaterRoutes.get('/', getTheaters );
theaterRoutes.post('/',validateTheaterAdd,handleValidation, postTheaters );



module.exports = theaterRoutes;