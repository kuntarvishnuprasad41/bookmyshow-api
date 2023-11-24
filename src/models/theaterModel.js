const sequelize = require('../db/connection');
const {Sequelize, Datatypes, DataTypes} = require('sequelize');


// address, name, phone, email, city_id
const Theater = sequelize.define('theater',{
    address : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    phone : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        validate :{
            isEmail : true,
        },
    },
    city_id : {
        type : DataTypes.INTEGER,
        allowNull :false,
    }
    
});


const storeTheater = async function(obj){
    const theater = new Theater({
        address : obj.address,
        name : obj.name,
        phone : obj.phone,
        email : obj.email,
        city_id : obj.city_id
    });

    return new Promise((resolve,reject)=>{
        theater.save()
        .then((result) => {
           resolve(result) 
        }).catch((err) => {
            reject(err)
        });
    })
}


module.exports = {storeTheater};