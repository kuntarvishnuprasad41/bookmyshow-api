const express = require('express');
const {getCities, putCity} = require('../controllers/cityController');
const validateCityAdd = require('../validators/cityValidator');
const handleValidation = require('../validators/validate');
const cityRoutes = require('express').Router();

cityRoutes.use(express.json());
cityRoutes.get('/',getCities);

cityRoutes.post('/',validateCityAdd,handleValidation,putCity)

module.exports = cityRoutes;