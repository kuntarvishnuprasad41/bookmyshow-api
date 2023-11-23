const { log } = require('console');
const exp = require('constants');
const express = require('express');
const router = express.Router();
require('dotenv').config();

const app = express();

const port = process.env.PORT || 8000;

app.get('/', (req,res)=>{
    res.status(200).send("Welcome to BMS");
})

app.listen(port, ()=>{
    log(`Running at : ${port}`);
});
