const router = require('express').Router()
module.exports = router

const potsRouter = require('./pots')

router.use('/users', require('./users'))

router.use('/pots', potsRouter)

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
