import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getLocalCart } from '../store/localCart';

const Cart = () => {
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState([]);

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
            imageUrl: item.imageUrl,
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
    dispatch(getLocalCart(cartData));
  }, [cartData]);

  const handleClick = (id) => {
    const cartDataCopy = [...cartData];
    let newCart = cartDataCopy.filter((pot) => {
      if (pot.id !== id) return pot;
    });
    setCartData(newCart);
  };

  console.log(cartData);

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
            return (
              <div key={item.id} className="cartItem">
                <div className="cartItemMedia">
                  <Link to={`/pots/${item.id}`}>
                    <img src={item.imageUrl} style={{ width: '175px' }} />
                  </Link>
                </div>
                <div className="cartItemDesc">
                  <h3>{item.description}</h3>
                  <h5>Quantity: {item.quantity}</h5>
                  <h5>Unit Price: ${item.price}</h5>
                  <h5>
                    Extended Price: ${(item.price * item.quantity).toFixed(2)}
                  </h5>
                  <Link to={`/cart/product/${item.id}/editQty`}>
                    <button className="cartBtn">Edit Qty</button>
                  </Link>
                  <Link to={`/pots/${item.id}`}>
                    <button className="cartBtn">View Item</button>
                  </Link>
                  <button
                    className="cartBtn"
                    onClick={() => handleClick(item.id)}
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
          {cartData.length === 1 ? (
            <h2>Cart Subtotal ({cartData.length} item):</h2>
          ) : (
            <h2>Cart Subtotal ({cartData.length} items):</h2>
          )}
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
