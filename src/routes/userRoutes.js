const express = require('express');
const app = express();
const userRoutes = require("express").Router();

const {test} = require('../models/userModel');
const config = require('../../config').database;
const User = require('../models/userModel');
const {createUser} = require('../controllers/userController');
const validateRegister = require('../validators/userValidator');
const handleValidation = require('../validators/validate');




userRoutes.use(express.json());


userRoutes.get('/',createUser);

userRoutes.post('/',validateRegister,handleValidation,createUser);








module.exports = userRoutes;