const {
  models: { User },
} = require('../db');
const jwt = require('jsonwebtoken');

// o: you could have gotten away with putting this into a middlwares module
async function authenticateToken(req, res, next) {
  try {
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

module.exports = authenticateToken;
