const {storeMovie} = require('../models/movieModel');

async function createMovie(req,res,next){
    let movie = req.body;
    storeMovie(movie)
    .then(data => {
        return res.status(200).send(data)
    })
    .catch((err)=>{
        return res.status(400).send(err)
    })
}

module.exports = {createMovie};