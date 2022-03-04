const db = require('./db');
const User = require('./models/User');
const Pot = require('./models/Pot');
const Payment = require('./models/Payment');
const Cart = require('./models/Cart')

User.hasMany(Payment);
Payment.belongsTo(User);

Pot.belongsToMany(Cart, { through: 'pot_cart'})
Cart.belongsToMany(Pot, { through: 'pot_cart' })
// Cart.belongsTo(User)
User.hasOne(Cart)
// User.belongsToMany(Pot, { through: 'Cart' });
// Pot.belongsToMany(User, { through: 'Cart' });

module.exports = {
  db,
  models: {
    User,
    Pot,
    Payment,
  },
};
