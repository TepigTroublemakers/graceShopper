import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSinglePot } from '../store/singlePot';

const SinglePot = () => {
  const { singlePot } = useSelector((state) => {
    return {
      singlePot: state.singlePot,
    };
  });

  const [orderQty, setOrderQty] = useState(1);
  const [cartData, setCartData] = useState([]);

  const { potId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePot(potId));
    if (localStorage.data) {
      const data = JSON.parse(localStorage.getItem('data'));
      setCartData(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(cartData));
  }, [cartData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCartData([
      ...cartData,
      {
        description: description,
        quantity: orderQty,
        price: price,
      },
    ]);
  };
  console.log('AFTER SUBMIT: ', cartData);

  console.log('LOCAL: ', localStorage.data);

  const { description, imageUrl, quantity, price, category } = singlePot;

  return (
    <div>
      <img src={imageUrl} style={{ width: '350px' }} />
      <h2>{description}</h2>
      <h4>Quantity On Hand: {quantity}</h4>
      <h4>Price: ${price}</h4>
      <h4>Category: {category}</h4>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="qty">Quantity:</label>
        <input
          type="number"
          id="qty"
          name="quantity"
          value={orderQty}
          min="1"
          max={quantity}
          onChange={(e) => setOrderQty(e.target.value)}
        />
        <br />
        <br />
        <button onSubmit={handleSubmit} type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default SinglePot;
