//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Pot = require('./models/Pot');
const PaymentInfo = require('./models/PaymentInfo');

User.hasMany(PaymentInfo);
PaymentInfo.belongsTo(User);
User.belongsToMany(Pot, { through: 'Cart' });
Pot.belongsToMany(User, { through: 'Cart' });

module.exports = {
  db,
  models: {
    User,
    Pot,
    PaymentInfo,
  },
};
