const potsRouter = require('express').Router();
const Pot = require('../db/models/Pot')

potsRouter.get('/', async (req, res, next) => {
  try {
    const pots = await Pot.findAll();
    res.json(pots)
  } catch (err) {
    next(err)
  }
})

potsRouter.get('/:potId', async (req, res, next) => {
  try {
    const pot = await Pot.findByPk(req.params.potId);
    res.json(pot)
  } catch (err) {
    next (err)
  }
})

module.exports = potsRouter
