const db = require('./db');
const User = require('./models/User');
const Pot = require('./models/Pot');
const cartPot = require('./models/cartPot');
const Cart = require('./models/Cart');

Cart.belongsToMany(Pot, { through: cartPot });
Pot.belongsToMany(Cart, { through: cartPot });

Cart.belongsTo(User);
User.hasMany(Cart);

module.exports = {
  db,
  models: {
    User,
    Pot,
    Cart,
  },
};
