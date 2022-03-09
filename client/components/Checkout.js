import React from 'react';
import { useSelector } from 'react-redux';
import PaypalCheckoutButton from './PaypalCheckoutButton';

const Checkout = () => {
  const { cart } = useSelector((state) => state);
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

  return (
    <div>
      <div className="paypal-button-container">
        <PaypalCheckoutButton product={product} />
      </div>
    </div>
  );
};

export default Checkout;
