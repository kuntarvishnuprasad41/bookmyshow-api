const { storeTheater, getAllTheaters, getMovies } = require("../models/theaterModel");


const getTheaters = async (req,res,next)=>{

    let listOfTheaters = getAllTheaters();
    res.status(200).send(await listOfTheaters);

}

const postTheaters = async(req,res,next)=>{
    let request = req.body;

    storeTheater(request).then(data=>{
        return res.status(200).send(data)
    }).catch((err)=>{
        return res.status(500).send(err)
    });
};

const getMoviesByTheater = async(req,res,next) =>{
    let theaterId = req.params.theater;
    let movies = await getMovies(theaterId);

    res.status(200).send( movies);
}

module.exports = {getTheaters, postTheaters, getMoviesByTheater};