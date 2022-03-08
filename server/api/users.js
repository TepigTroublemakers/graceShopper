const router = require('express').Router();
const {
  models: { User },
} = require('../db');
const authenticateAdminToken = require('./adminAuth');
module.exports = router;

// /api/users
router.get('/', authenticateAdminToken, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: [
        'id',
        'username',
        'role',
        'firstName',
        'lastName',
        'email',
        'address',
      ],
    });
    if (!users) throw new Error(404);
    res.json(users);
  } catch (err) {
    next(err);
  }
});
