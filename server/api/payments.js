// o: is this file being used?
const router = require('express').Router();
const {
  models: { Payment, User },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    res.send(
      await Payment.findAll({
        include: {
          model: User,
        },
      })
    );
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.send(
      await Payment.findOne({
        include: {
          model: User,
        },
        where: {
          id: req.params.id,
        },
      })
    );
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Payment.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const payments = await Payment.findOne({
      include: {
        model: User,
      },
      where: {
        id: req.params.id,
      },
    });
    res.send(await payments.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const payments = await Payment.findByPk(req.params.id);
    await payments.destroy();
    res.send(payments);
  } catch (err) {
    next(err);
  }
});
