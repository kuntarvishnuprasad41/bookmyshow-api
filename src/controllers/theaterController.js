const { storeTheater } = require("../models/theaterModel");


const getTheaters = (req,res,next)=>{
    res.status(200).send('Hi');

}

const postTheaters = async(req,res,next)=>{
    let request = req.body;

    storeTheater(request).then(data=>{
        return res.status(200).send(data)
    }).catch((err)=>{
        return res.status(500).send(err)
    })
}

module.exports = {getTheaters, postTheaters};