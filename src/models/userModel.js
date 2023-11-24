const { query } = require('express-validator');
const sequelize = require('../db/connection');
const { Sequelize, DataTypes } = require('sequelize');





const User = sequelize.define('user', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    middleName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 8,
        },
    },

    timestamps: false,

    // If don't want createdAt
    createdAt: false,

    // If don't want updatedAt
    updatedAt: false,

});


const storeUser = async function (obj) {
    const user = new User(
        {
            firstName: obj.firstName,
            middleName: obj.middleName,
            lastName: obj.lastName,
            mobile: obj.mobile,
            email: obj.email,
            password: obj.password,
        }
    );


    return new Promise(async (resolve, reject) => {
        try {
            await user.save();
            resolve(user);
        } catch (err) {
            reject(err);
        }
    });

}





module.exports = { User, storeUser }