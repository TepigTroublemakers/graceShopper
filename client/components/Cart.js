import React, { useEffect, useState } from 'react';

// To Do:
// Remove items from cart
// Change quantities

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (localStorage.data) {
      const data = JSON.parse(localStorage.getItem('data'));
      setCartData(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(cartData));
  }, [cartData]);

  return (
    <div>
      <div>
        {cartData.map((item) => {
          return (
            <div>
              <h3>{item.description}</h3>
              <h5>Quantity: {item.quantity}</h5>
              <h5>Unit Price: ${item.price}</h5>
              <h5>Extended Price: ${item.price * item.quantity}</h5>
            </div>
          );
        })}
      </div>
      <br />
      <div>
        <h2>Cart Total:</h2>
        <h2>
          $
          {cartData.reduce((total, item) => {
            const extPrice = item.price * item.quantity;
            return total + extPrice;
          }, 0)}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
