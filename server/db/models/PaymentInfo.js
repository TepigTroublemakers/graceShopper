const Sequelize = require('sequelize');
const db = require('../db');

const PaymentInfo = db.define('paymentinfo', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  cardNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isCreditCard: true,
    },
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

module.exports = PaymentInfo;

//User.hasMany(PaymentInfo)
//PaymentInfo.belongsTo(User)
//User.BelongsToMany(Product, {through: 'Cart'})
//Product.BelongsToMany(User, {through: 'Cart'})
