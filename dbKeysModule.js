const Sequelize = require('sequelize');

var username = 'root';
var password = 'root';
var host = '3306';
var dbName = 'delilahdb';

const sequelizeAuth = new Sequelize(`mysql://${username}:${password}@localhost:${host}/${dbName}`);


module.exports = sequelizeAuth;
