const { storeTicket } = require("../models/ticketModel");


async function createTicket(req,res,next){
    let ticket = req.body;
    storeTicket(ticket)
    .then(data => {
        return res.status(200).send(data)
    })
    .catch((err)=>{
        return res.status(400).send(err)
    })
}

module.exports = {createTicket};