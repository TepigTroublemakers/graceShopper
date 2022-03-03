const Sequelize = require('sequelize');
const db = require('../db');

// o: can you explain this?
const Payment = db.define('payment', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  cardNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  expirationMonth: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 12,
    },
  },
  expirationYear: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 2022,
    },
  },
  zipcode: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Payment;
