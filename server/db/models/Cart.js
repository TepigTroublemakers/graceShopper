const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  orderDate: {
    type: Sequelize.DATEONLY,
    defaultValue: new Date(),
  },
  fulfilled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Cart;
