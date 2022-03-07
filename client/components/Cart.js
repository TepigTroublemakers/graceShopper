import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [deleted, setDeleted] = useState(-1);

  useEffect(() => {
    if (localStorage.data) {
      const data = JSON.parse(localStorage.getItem('data'));
      const reducedData = {};
      data.forEach((item) => {
        if (reducedData[item.id]) {
          reducedData[item.id].quantity += Number(item.quantity);
        } else {
          reducedData[item.id] = {
            id: item.id,
            description: item.description,
            price: item.price,
            quantity: Number(item.quantity),
            quantityOnHand: Number(item.quantityOnHand),
          };
        }
      });
      setCartData(Object.values(reducedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(cartData));
  }, [cartData]);

  const handleClick = (id) => {
    const cartDataCopy = [...cartData];
    let newCart = cartDataCopy.filter((pot) => {
      if (pot.id !== id) return pot;
    });
    setCartData(newCart);
  };

  if (cartData.length < 1) {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <br />
        <h3>Your PotStop cart is empty.</h3>
        <Link to="/pots?page=1">Continue shopping...</Link>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <br />
        <div>
          {cartData.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.description}</h3>
                <h5>Quantity: {item.quantity}</h5>
                <h5>Unit Price: ${item.price}</h5>
                <h5>Extended Price: ${item.price * item.quantity}</h5>
                <Link to={`/cart/product/${item.id}/editQty`}>
                  <button>Edit Qty</button>
                </Link>
                <button onClick={() => handleClick(item.id)}>
                  Remove Item
                </button>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <div>
          <h2>Cart Total:</h2>
          <h2>
            $
            {cartData
              .reduce((total, item) => {
                const extPrice = item.price * item.quantity;
                return total + extPrice;
              }, 0)
              .toFixed(2)}
          </h2>
        </div>
      </div>
    );
  }
};

export default Cart;
