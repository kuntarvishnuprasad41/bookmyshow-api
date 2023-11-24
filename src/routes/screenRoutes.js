const express = require('express');
const { getCities } = require('../controllers/cityController');
const { getScreens, setScreens } = require('../controllers/screenController');
const validateScreenAdd = require('../validators/screenValidator');
const handleValidation = require('../validators/validate');
const screenRoutes = express.Router();

screenRoutes.use(express.json());

screenRoutes.get('/',getScreens);
screenRoutes.post('/',validateScreenAdd,handleValidation,setScreens);

module.exports = screenRoutes;


