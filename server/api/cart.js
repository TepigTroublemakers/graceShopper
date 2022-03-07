const router = require('express').Router();
const {
  models: { Cart, Pot },
} = require('../db');
const authenticateCustomerToken = require('./customerAuth')
module.exports = router;

// GET /api/cart/
router.get('/', authenticateCustomerToken, async (req, res, next) => {
  try{

    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id
      },
      include: {
        model: Pot,
      }
    })

    res.json(userCart);

  }catch(err){
    next(err)
  }
})

// POST /api/cart/:userId
//add pot corresponding to potId to cart belonging to current user, must pass in quantity in body
router.post('/:potId', authenticateCustomerToken, async (req, res, next) => {
  try{
    // const {quantity} = req.body.quantity
    console.log("request body", req.body)
    const { potId } = req.params;
    const pot = await Pot.findOne({where: {id: potId}})
    // console.log("pot to add", pot)

    const userCart = await Cart.findOne({
      where: {
        userId: req.user.id
      },
      include: {
        model: Pot,
      }
    })
    // console.log("usercart", userCart.pots)
    // console.log("price type:", typeof(Number(pot.price)), Number(pot.price))
    // console.log("quantity type: ", typeof(parseInt(quantity)), parseInt(quantity))
    // console.log("pot", pot);
    const itemTotal = Number(pot.price) * parseInt(quantity);
    console.log("item total", itemTotal)
    await userCart.addPot(pot, {
      through: {
        quantity,
        // itemTotal
      }
    })
    // console.log("updated db cart", userCart.pots)

    res.json(userCart)

  }catch(err){
    next(err);
  }
})
