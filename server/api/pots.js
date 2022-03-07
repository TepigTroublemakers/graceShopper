const potsRouter = require('express').Router();
const Pot = require('../db/models/Pot');
const authenticateAdminToken = require('./adminAuth');

// GET /api/pots
potsRouter.get('/', async (req, res, next) => {
  try {
    if (req.query.page) {
      const pots = await Pot.findAndCountAll({
        offset: req.query.page * 10 - 10,
        limit: 10,
      });
      if (req.query.category) {
        const pots = await Pot.findAndCountAll({
          offset: req.query.page * 10 - 10,
          limit: 10,
          where: {
            category: req.query.category,
          },
        });
        if (!pots) throw new Error(404);
        res.json(pots.rows);
        return;
      }
      if (!pots) throw new Error(404);
      res.json(pots.rows);
      return;
    }
    if (req.query.category) {
      const pots = await Pot.findAll({
        where: { category: req.query.category },
      });
      if (!pots) throw new Error(404);
      res.json(pots);
      return;
    }
    const pots = await Pot.findAll();
    if (!pots) throw new Error(404);
    res.json(pots);
  } catch (err) {
    next(err);
  }
});

// GET /api/pots/:potId
potsRouter.get('/:potId', async (req, res, next) => {
  try {
    const pot = await Pot.findByPk(req.params.potId);
    if (!pot) throw new Error(404);
    res.json(pot);
  } catch (err) {
    next(err);
  }
});

// POST /api/pots
potsRouter.post('/', authenticateAdminToken, async (req, res, next) => {
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
potsRouter.delete('/:potId', authenticateAdminToken, async (req, res, next) => {
  try {
    const potToDelete = await Pot.findByPk(req.params.potId);
    if (!potToDelete) throw new Error(404);
    await Pot.destroy({
      where: {
        id: req.params.potId,
      },
    });
    res.json(potToDelete);
  } catch (err) {
    next(err);
  }
});

// PUT /api/pots/:potId
potsRouter.put('/:potId', authenticateAdminToken, async (req, res, next) => {
  try {
    const { description, imageUrl, quantity, price, category } = req.body;
    const potToUpdate = await Pot.findByPk(req.params.potId);
    if (!potToUpdate) throw new Error(404);
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
