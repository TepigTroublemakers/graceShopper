const router = require('express').Router();
const {
  models: { Cart, Pot, cartPot },
} = require('../db');
const authenticateToken = require('./AuthToken');
module.exports = router;

// GET /api/cart/
router.get('/', authenticateToken, async (req, res, next) => {
  try {
    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id,
      },
      include: {
        model: Pot,
      },
    });
    res.json(userCart);
  } catch (err) {
    next(err);
  }
});

// POST /api/cart/:potId
//add pot corresponding to potId to cart belonging to current user, must pass in quantity in body
router.post('/:potId', authenticateToken, async (req, res, next) => {
  try {
    const quantity = parseInt(req.body.quantity);

    const { potId } = req.params;
    const pot = await Pot.findOne({ where: { id: potId } });

    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id,
      },
    });
    const itemTotal = Number((Number(pot.price) * quantity).toFixed(2));
    // console.log("item total", itemTotal)
    await userCart.addPot(pot, {
      through: {
        quantity,
        itemTotal,
      },
    });
    res.json(userCart);
  } catch (err) {
    next(err);
  }
});

// DELETE /api/cart/:potId
router.delete('/:potId', authenticateToken, async (req, res, next) => {
  try {
    const { potId } = req.params;
    console.log(req.user);
    const userId = req.user.id;

    const userCart = await Cart.findOne({
      where: {
        userId,
      },
    });

    const pot = await Pot.findOne({
      where: {
        id: potId,
      },
    });

    await userCart.removePot(pot.id);

    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});
