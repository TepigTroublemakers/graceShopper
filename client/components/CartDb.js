import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartFromDB } from '../store/cart';
import { Link } from 'react-router-dom';
import { deletePot } from '../store/cart';

const CartDb = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => {
    return state.cart
  })
  const cartData = cart.pots || [];
  useEffect(() => {
    dispatch(getCartFromDB())
  }, [])

  if (cartData.length < 1) {
    return (
      <div className="cartContainer">
        <h2>Shopping Cart</h2>
        <br />
        <h3>Your PotStop cart is empty.</h3>
        <Link to="/pots?page=1">Continue shopping...</Link>
      </div>
    );
  } else {
    return (
      <div className="cartContainer">
        <h2>Shopping Cart</h2>
        <br />
        <div>
          {cartData.map((item) => {
            let quantity = item.cartPot.quantity || 1;
            return (
              <div key={item.id} className="cartItem">
                <div className="cartItemMedia">
                  <Link to={`/pots/${item.id}`}>
                    <img src={item.imageUrl} style={{ width: '175px' }} />
                  </Link>
                </div>
                <div className="cartItemDesc">
                  <h3>{item.description}</h3>
                  <h5>Quantity: {quantity}</h5>
                  <h5>Unit Price: ${item.price}</h5>
                  <h5>
                    Extended Price: ${(item.price * quantity).toFixed(2)}
                  </h5>
                  <Link to={`/cart/product/${item.id}/editQty`}>
                    <button className="cartBtn">Edit Qty</button>
                  </Link>
                  <Link to={`/pots/${item.id}`}>
                    <button className="cartBtn">View Item</button>
                  </Link>
                  <button
                    className="cartBtn"
                    onClick={() => dispatch(deletePot(item.id))}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <div>
          <h2>Cart Subtotal:</h2>
          <h2>
            $
            {cartData
              .reduce((total, item) => {
                const extPrice = item.price * item.cartPot.quantity;
                return total + extPrice;
              }, 0)
              .toFixed(2)}
          </h2>
        </div>
      </div>
    );
  }
}

export default CartDb
