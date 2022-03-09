import React from 'react';
import { useSelector } from 'react-redux';
import PaypalCheckoutButton from './PaypalCheckoutButton';

const Checkout = () => {
  const { cart } = useSelector((state) => state);
  const isLoggedIn = useSelector((state) => !!state.auth.id);

  const localCartData = JSON.parse(localStorage.getItem('data'));

  let totalLocalCost = [];
  if (localCartData) {
    totalLocalCost.push(
      localCartData
        .reduce((total, item) => {
          const extPrice = item.price * item.quantity;
          return total + extPrice;
        }, 0)
        .toFixed(2)
    );
  }

  const cartData = cart.pots || [];
  const totalCost = cartData
    .reduce((total, item) => {
      const extPrice = item.price * item.cartPot.quantity;
      return total + extPrice;
    }, 0)
    .toFixed(2);

  const product = {
    price: totalCost,
  };

  const localProduct = {
    price: totalLocalCost[0],
  };

  return (
    <div>
      {isLoggedIn ? (
        <div className="paypal-button-container">
          <PaypalCheckoutButton product={product} />
        </div>
      ) : (
        <div className="paypal-button-container">
          <PaypalCheckoutButton product={localProduct} />
        </div>
      )}
    </div>
  );
};

export default Checkout;
