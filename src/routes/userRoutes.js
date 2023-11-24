const express = require('express');
const userRoutes = require("express").Router();
const {createUser} = require('../controllers/userController');
const validateRegister = require('../validators/userValidator');
const handleValidation = require('../validators/validate');




userRoutes.use(express.json());


userRoutes.get('/',createUser);

userRoutes.post('/',validateRegister,handleValidation,createUser);








module.exports = userRoutes;