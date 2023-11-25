const sequelize = require('../db/connection');
const {Sequelize, Datatypes, DataTypes, Op, Model} = require('sequelize');
const {Movie} = require('../models/movieModel');
const { Screen } = require('../models/screenModel');




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
    });
};

const getAllTheaters = async function(){
    const theaters = await Theater.findAll();

    return await theaters;
}



Movie.hasMany(Screen,{
    foreignKey : 'movie_id'
});

Screen.belongsTo(Theater,{
    foreignKey : 'theater_id'
})

const getMovies = async function(theaterId){
    const plus7Days = new Date(new Date().setDate(new Date().getDate() + 7));

  


    const movie = await Movie.findAll({
        attributes : ['name','censor_certificate_type','language'],
        include:[
           { 
             model : Screen,
             attributes : ['id','show_date'],
             where : {
                theater_id : 3,
                show_date:{
                    [Op.between] : [sequelize.fn('NOW'), plus7Days]
                }
             },
             include : [
                {
                    model : Theater,
                    attributes: ['name','address']
                }
             ]
        }
        ]
    });


    return await movie;
}

module.exports = {storeTheater, getAllTheaters,getMovies};