const sequelize = require('../db/connection');
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

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


    // If don't want createdAt
    created_at: false,

    // If don't want updatedAt
    updated_at: false,

});


const storeUser = async function (obj) {
    const user = new User(
        {
            firstName: obj.firstName,
            middleName: obj.middleName,
            lastName: obj.lastName,
            mobile: obj.mobile,
            email: obj.email,
            password: bcrypt.hashSync(obj.password, 8),
        }
    );


    return new Promise((resolve, reject) => {
        user.save()
          .then(() => resolve(user))
          .catch((err) => reject(err));
      });

};

const getUsers = async function(){
    // Find all users
    const users = await User.findAll({attributes:{exclude:['password']}});
    return users;
}


module.exports = { User, storeUser, getUsers }