const Sequelize = require('sequelize');

const sequelize = new Sequelize('sellers_products', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;