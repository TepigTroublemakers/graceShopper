const router = require('express').Router()
const { models: { User }} = require('../db')
const jwt = require('jsonwebtoken')
module.exports = router

function  authenticateAdminToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if(token == null){
    res.sendStatus(404)
  }
  jwt.verify(token, process.env.jwt, (err, user)=> {
    if(err) res.sendStatus(403);
    if(user.role !== 'admin') res.sendStatus(403);
    req.user = user
    next()
  })
}

router.get('/', authenticateAdminToken, async (req, res, next) => {
  try {
    const users = await User.findAll({
    // explicitly select only the id and username fields - even though
    // users' passwords are encrypted, it won't help if we just
    // send everything to anyone who asks!
      attributes: ['id', 'username', 'role', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})
