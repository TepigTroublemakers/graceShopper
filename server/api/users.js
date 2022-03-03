const router = require('express').Router();
const {
  models: { User },
} = require('../db');
const jwt = require('jsonwebtoken');
module.exports = router;

async function authenticateAdminToken(req, res, next) {
  try {
    const token = req.headers['authorization'];

    if (token === null) return res.sendStatus(401);

    const { id } = jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(id);
    if (user.role === 'admin') {
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    next(err);
  }
}

// /api/users
router.get('/', authenticateAdminToken, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'role', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
