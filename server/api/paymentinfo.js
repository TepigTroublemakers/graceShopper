const router = require('express').Router();
const {
  models: { PaymentInfo, User },
} = require('../db');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    res.send(
      await PaymentInfo.findAll({
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
      await PaymentInfo.findOne({
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
    res.status(201).send(await PaymentInfo.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const payInfo = await PaymentInfo.findOne({
      include: {
        model: User,
      },
      where: {
        id: req.params.id,
      },
    });
    res.send(await payInfo.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const payInfo = await PaymentInfo.findByPk(req.params.id);
    await payInfo.destroy();
    res.send(payInfo);
  } catch (err) {
    next(err);
  }
});
