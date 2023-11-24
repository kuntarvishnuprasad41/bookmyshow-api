const { log } = require('console');
const exp = require('constants');
const express = require('express');
const routes = express.Router();
require('dotenv').config();
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoutes');
const cityRoutes = require('./routes/cityRoutes');
const theaterRoutes = require('./routes/theaterRoutes');
const screenRoutes = require('./routes/screenRoutes');
const ratingRoutes = require('./routes/ratingRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

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


// Implementations
// cities;    [x]
// movies;    [x]
// users;     [x]   
// ratings;   [x]
// screens;   [x]
// theaters;  [x]
// tickets;   [x]

routes.use('/users',userRoutes);
routes.use('/movies',movieRoutes);
routes.use('/cities',cityRoutes);
routes.use('/theaters',theaterRoutes);
routes.use('/screens',screenRoutes);
routes.use('/ratings',ratingRoutes);
routes.use('/tickets',ticketRoutes);







app.listen(port, ()=>{
    log(`Running at : ${port}`);
});
