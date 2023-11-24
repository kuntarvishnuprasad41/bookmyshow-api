const express = require('express');
const ticketRoutes = require('express').Router();
const validateTicketAdd = require('../validators/ticketValidator');
const validate = require('../validators/validate');
const {createTicket} = require('../controllers/ticketController');

ticketRoutes.use(express.json());
ticketRoutes.get('/',createTicket);
ticketRoutes.post('/',validateTicketAdd,validate,createTicket);

module.exports = ticketRoutes;