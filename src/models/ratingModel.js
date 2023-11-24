const sequelize = require('../db/connection');
const { Sequelize, DataTypes } = require('sequelize');

// movie_id, user_id, rating
const Rating = sequelize.define('rating',{
    movie_id : {
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull :false,
    },
    rating:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    }
});

const storeRating =  async function(obj){
    console.log(obj);
    const rating = new Rating(
        {
            movie_id : obj.movie_id,
            user_id:obj.user_id,
            rating:obj.rating,
        }
    );

    return new Promise((resolve,reject)=>{
        rating.save()
        .then(data=> resolve(data))
        .catch((err)=>reject(err));
    });
        
}

module.exports = {storeRating};