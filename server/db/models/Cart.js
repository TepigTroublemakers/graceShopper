const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  },
  itemTotal: {
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0,
    allowNull: true,
    validate: {
      notEmpty: true,
    },
  }

})

module.exports = Cart
