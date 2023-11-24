const sequelize = require('../db/connection');
const { Sequelize, DataTypes } = require('sequelize');

const Screen = sequelize.define('screen',{
    screen_ref : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    seats_available : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    theater_id : {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    show_timings : {
        type : DataTypes.TIME,
        allowNull : false
    },
    show_date : {
        type : DataTypes.DATE,
        allowNull : false
    },
    movie_id : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
});


const storeScreen = async(obj)=>{
    const screen = new Screen(
        {
            screen_ref : obj.screen_ref,
            seats_available : obj.seats_available,
            theater_id : obj.theater_id,
            show_timings : obj.show_timings,
            show_date : obj.show_date,
            movie_id : obj.movie_id
        }
    );

    return new Promise((resolve,reject)=>{
        screen.save().then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err)
        });
    })
}

module.exports = {storeScreen}