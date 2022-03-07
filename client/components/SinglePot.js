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

  const [orderQty, setOrderQty] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [cartData, setCartData] = useState(() => {
    const localStorageData = JSON.parse(localStorage.getItem('data'));
    return localStorageData || [];
  });

  const { potId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePot(potId));
  }, []);

  useEffect(() => {
    setAddedToCart(false);
  }, [orderQty]);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(cartData));
  }, [cartData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCartData([
      ...cartData,
      {
        id: potId,
        description: description,
        quantity: orderQty,
        price: price,
      },
    ]);
    setAddedToCart(true);
  };

  const { description, imageUrl, quantity, price, category } = singlePot;
  const totalCost = (price * orderQty).toFixed(2);

  return (
    <div id="singlePot">
      <img src={imageUrl} style={{ width: '350px' }} />
      <h2>{description}</h2>
      <h4>Quantity On Hand: {quantity}</h4>
      <h4>Price: ${price}</h4>
      <h4>Category: {category}</h4>
      <br />${totalCost}
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="qty">
          Quantity:{' '}
          <input
            type="number"
            id="qty"
            name="quantity"
            value={orderQty}
            min={0}
            max={quantity}
            onChange={(e) => setOrderQty(e.target.value)}
          />
          <button type="submit">Add to Cart</button>
          <button id="back" type="button" onClick={() => history.back()}>
            Back
          </button>
        </label>
        <div>
          {addedToCart ? (
            <h4 style={{ color: 'green' }}>
              {orderQty} item(s) added to cart!
            </h4>
          ) : (
            <></>
          )}
        </div>
      </form>
    </div>
  );
};

export default SinglePot;
