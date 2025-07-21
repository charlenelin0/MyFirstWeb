const path = require('path');
// Import Sequelize
const { Sequelize, DataTypes } = require('sequelize');

// Create Connection with sqlite, put in storage
const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: path.join(__dirname, '../database/my_database.sqlite')
    }
);

module.exports = {sequelize, DataTypes};