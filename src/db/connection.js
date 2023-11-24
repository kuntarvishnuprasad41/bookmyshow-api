let Sequelize = require('sequelize');
const config = require('../../config').database;



let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    define: {
        timestamps: false
    }
});


module.exports = sequelize, Sequelize;