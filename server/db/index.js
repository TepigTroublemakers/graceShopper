const db = require('./db');
const User = require('./models/User');
const Pot = require('./models/Pot');
const Payment = require('./models/Payment');
const cartPot = require('./models/Cart')
const Cart = db.define('cart', { })


User.hasMany(Payment);
Payment.belongsTo(User);

Cart.belongsToMany(Pot, { through: cartPot });
Pot.belongsToMany(Cart, { through: cartPot });

Cart.belongsTo(User);
User.hasOne(Cart);

// Order.belongsToMany(Pot)
// User.belongsToMany(Pot, { through: Cart });
// Pot.belongsToMany(User, { through: Cart });

module.exports = {
  db,
  models: {
    User,
    Pot,
    Payment,
    cartPot
  },
};

