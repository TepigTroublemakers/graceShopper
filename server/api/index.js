const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/pots', require('./pots'));
router.use('/payments', require('./payments'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

module.exports = router;
