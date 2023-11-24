const sequelize = require('../db/connection');
const { Sequelize, DataTypes } = require('sequelize');

const City = sequelize.define('city',{
    city_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pincode:{
        type:DataTypes.STRING,
        allowNull:false
    },
    state:{
        type:DataTypes.STRING,
        allowNull:false
    },
});

const storeCity = async function(obj){
    console.log(obj);
    const city = new City({
        city_name : obj.city_name,
        pincode : obj.pincode,
        state : obj.state
    });

    return new Promise((resolve,reject)=>{
        city.save()
        .then(data=>{resolve(data)})
        .catch((err)=>{
            reject(err)
        });
    })
}

module.exports = {storeCity};