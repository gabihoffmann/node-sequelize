const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/database");

const database = new Sequelize(dbConfig);

module.exports = { database, DataTypes };
