import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartLocal from './CartLocal';
import CartDb from './CartDb';
import { addToDbCart, getCartFromDB } from '../store/cart';

const Cart = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => {
    return !!state.auth.id;
  });

  useEffect(() => {
    if (localStorage.data) {
      const localCart = JSON.parse(localStorage.getItem('data'));
      localCart.forEach((pot) => {
        dispatch(addToDbCart(pot.id, pot.quantity));
      });
      localStorage.removeItem('data');
    }
  }, []);

  if (isLoggedIn) {
    return <CartDb />;
  } else {
    return <CartLocal />;
  }
};

export default Cart;
