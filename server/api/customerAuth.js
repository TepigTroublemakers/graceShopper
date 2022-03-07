const {
  models: { User },
} = require('../db');
const jwt = require('jsonwebtoken');

async function authenticateCustomerToken(req, res, next) {
  try {
    //console.log(req.headers);
    const token = req.headers['authorization'];

    if (token === null) return res.sendStatus(401);

    const { id } = jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authenticateCustomerToken;
