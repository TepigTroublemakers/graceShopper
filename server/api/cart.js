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
        fulfilled: false,
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

router.get('/orders', authenticateToken, async (req, res, next) => {
  try {
    const userCart = await Cart.findAll({
      where: {
        userId: req.user.id,
        fulfilled: true,
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
        fulfilled: false,
      },
      include: {
        model: Pot,
      },
    });
    const itemTotal = Number((Number(pot.price) * quantity).toFixed(2));
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

// PUT /api/cart/
router.put('/', authenticateToken, async (req, res, next) => {
  try {
    const potId = req.body[0].id;
    const userId = req.user.id;

    const userCart = await Cart.findOne({
      where: {
        userId: userId,
        fulfilled: false,
      },
      include: {
        model: Pot,
      },
    });

    const pot = await Pot.findOne({
      where: {
        id: potId,
      },
    });

    await userCart.removePot(pot);
    await userCart.save();

    const updatedCart = await Cart.findOne({
      where: {
        userId: userId,
        fulfilled: false,
      },
      include: {
        model: Pot,
      },
    });
    res.json(updatedCart);
  } catch (err) {
    next(err);
  }
});

router.put('/confirm', authenticateToken, async (req, res, next) => {
  try {
    const { orderDate } = req.body;
    const completePurchase = await Cart.findOne({
      where: {
        id: req.body.cartId,
      },
    });
    await completePurchase.update({
      fulfilled: true,
      orderDate,
    });
    res.json();
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const item = await Cart.findOrCreate({
      where: {
        userId: req.body.userId,
        fulfilled: false,
      },
      include: {
        model: Pot,
      },
    });
    res.json(item);
  } catch (err) {
    next(err);
  }
});
