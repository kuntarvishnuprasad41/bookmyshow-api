const { log } = require('console');
const exp = require('constants');
const express = require('express');
const routes = express.Router();
require('dotenv').config();
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes')

const app = express();

const port = process.env.PORT || 8000;


// set security http headers
app.use(helmet());

// middleware for parsing request
app.use(express.json());


app.use(routes);


app.get('/', (req,res)=>{
    res.status(200).send("Welcome to BMS");
});

routes.use('/users',userRoutes);



app.listen(port, ()=>{
    log(`Running at : ${port}`);
});
