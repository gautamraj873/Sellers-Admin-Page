const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    sellingPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;
