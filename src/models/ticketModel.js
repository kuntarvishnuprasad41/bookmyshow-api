const sequelize = require('../db/connection');
const { Sequelize, DataTypes } = require('sequelize');

//user_id,seats_allotted, amount, screen_id
const Ticket = sequelize.define('ticket',{
    screen_id : {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull :false,
    },
    seats_allotted:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
    amount:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    }
});

const storeTicket =  async function(obj){
    console.log(obj);
    const ticket = new Ticket(
        {
            screen_id : obj.screen_id,
            user_id : obj.user_id,
            seats_allotted : obj.seats_allotted,
            amount : obj.amount
        }
    );

    return new Promise((resolve,reject)=>{
        ticket.save()
        .then(data=> resolve(data))
        .catch((err)=>reject(err));
    });
        
}

module.exports = {storeTicket};