const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    todoName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    todoDesc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    candyPrice: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    candyQty: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
})

module.exports = Expense;