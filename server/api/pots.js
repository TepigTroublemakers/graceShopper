const potsRouter = require('express').Router();
const Pot = require('../db/models/Pot');

// GET /api/pots
potsRouter.get('/', async (req, res, next) => {
  try {
    const pots = await Pot.findAll();
    res.json(pots);
  } catch (err) {
    next(err);
  }
});

// GET /api/pots/:potId
potsRouter.get('/:potId', async (req, res, next) => {
  try {
    // o: always check for when resource does not exist
    const pot = await Pot.findByPk(req.params.potId);
    res.json(pot);
  } catch (err) {
    next(err);
  }
});

// POST /api/pots
// o: only admins should be able to do this
potsRouter.post('/', async (req, res, next) => {
  try {
    const { description, imageUrl, quantity, price, category } = req.body;
    const newPot = await Pot.create({
      description,
      imageUrl,
      quantity,
      price,
      category,
    });
    res.json(newPot);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/pots/:potId
// o: only admins should be able to do this
potsRouter.delete('/:potId', async (req, res, next) => {
  try {
    const potToDelete = await Pot.findByPk(req.params.id);
    await Pot.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(potToDelete);
  } catch (err) {
    next(err);
  }
});

// PUT /api/pots/:potId
// o: only admins should be able to do this
potsRouter.put('/:id', async (req, res, next) => {
  try {
    const { description, imageUrl, quantity, price, category } = req.body;
    // o: always check for when resource does not exist
    const potToUpdate = await Pot.findByPk(req.params.id);
    const updatedPot = await potToUpdate.update({
      description,
      imageUrl,
      quantity,
      price,
      category,
    });
    res.json(updatedPot);
  } catch (err) {
    next(err);
  }
});

module.exports = potsRouter;
