const Sequelize = require('sequelize');
const db = require('../db');

const Pot = db.define('pot', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://blog.gardenloversclub.com/wp-content/uploads/2014/11/flower-pot-glasses.jpg?ezimgfmt=ng:webp/ngcb69',
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.DECIMAL(10,2),
    defaultValue: 1,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.ENUM(
      'reptiles',
      'owls',
      'birds',
      'mammals',
      'wacky',
      'other'
    ),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Pot;
