const express = require('express');
const { storeCity } = require('../models/cityModel');


const getCities=(req,res,next)=>{
    res.status(200).send("Hello")
}

const putCity = async (req,res,next)=>{
    storeCity(req.body).then((result)=>{
        return res.status(200).send(result)
    }).catch((err)=>{
        return res.status(400).send(err)
    });
}


module.exports = {getCities, putCity};