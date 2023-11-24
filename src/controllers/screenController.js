const { storeScreen } = require("../models/screenModel");

const getScreens = (req,res,next)=>{
    res.status(200).send("Hi")
};

const setScreens =async (req,res,next)=>{
    let screen = req.body;
    storeScreen(screen).then((result) => {
        return res.status(200).send(result)
    }).catch((err) => {
        return res.status(500).send(err)
    });
}

module.exports = {getScreens, setScreens};