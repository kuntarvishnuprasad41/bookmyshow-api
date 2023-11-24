const { storeRating } = require("../models/ratingModel");


async function createRating(req,res,next){
    let rating = req.body;
    storeRating(rating)
    .then(data => {
        return res.status(200).send(data)
    })
    .catch((err)=>{
        return res.status(400).send(err)
    })
}

module.exports = {createRating};