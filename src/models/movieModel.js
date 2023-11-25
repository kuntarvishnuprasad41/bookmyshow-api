const sequelize = require('../db/connection');
const { Sequelize, DataTypes } = require('sequelize');


const Movie = sequelize.define('movie',{
    name : {
        type:DataTypes.STRING,
        allowNull: false,
    },
    censor_certificate_type:{
        type:DataTypes.STRING,
        allowNull :false,
    },
    language:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    release_date:{
        type:DataTypes.DATE,
        allowNull:false,
    }
});

const storeMovie =  async function(obj){
    console.log(obj);
    const movie = new Movie(
        {
            name : obj.name,
            censor_certificate_type:obj.censor_certificate_type,
            language:obj.language,
            release_date:obj.release_date
        }
    );

    return new Promise((resolve,reject)=>{
        movie.save()
        .then(data=> resolve(data))
        .catch((err)=>reject(err));
    });
        
}

module.exports = {storeMovie, Movie};