const router = require('express').Router();
const {
  models: { Cart, Pot },
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
// o: PUT /api/cart would be more RESTful with pot info in the req.body
router.post('/:potId', authenticateToken, async (req, res, next) => {
  try {
    const quantity = parseInt(req.body.quantity);

    const { potId } = req.params;
    const pot = await Pot.findOne({ where: { id: potId } });

    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id,
      },
      include: {
        model: Pot,
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
