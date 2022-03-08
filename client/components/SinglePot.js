import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToDbCart } from '../store/cart';
import { getSinglePot } from '../store/singlePot';
import { getLocalCart } from '../store/localCart';

const SinglePot = () => {
  const { singlePot } = useSelector((state) => {
    return {
      singlePot: state.singlePot,
    };
  });
  
  const isLoggedIn = useSelector((state) => {
    return !!state.auth.id;
  });
  const userId = useSelector((state) => {
    return state.auth.id;
  })
  const [orderQty, setOrderQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [userSubmit, setUserSubmit] = useState(false);
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
    // setUserSubmit(false);
  }, [orderQty]);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(cartData));
    dispatch(getLocalCart(cartData));
  }, [cartData]);

  useEffect(() => {
    //console.log("Dispatching to cart store")
    dispatch(addToDbCart(potId, orderQty))
  }, [userSubmit])

  const handleSubmit = (e) => {
    e.preventDefault();
    //need to check if user is logged in, if not, add to local cart, if so, dispatch thunk creator to add to cart
    if(!isLoggedIn){
      //console.log("adding to local cart")
      setCartData([
      ...cartData,
      {
        id: potId,
        imageUrl: imageUrl,
        description: description,
        quantity: orderQty,
        price: price,
        quantityOnHand: quantity,
      },
    ]);

    }
    setAddedToCart(true);
  };

  const checkLoggedIn = () => {
    //console.log("checking login")
    if(isLoggedIn){
      setUserSubmit(true);
    }else{
      setUserSubmit(false);
    }
  }

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
            min={1}
            max={quantity}
            onChange={(e) => setOrderQty(e.target.value)}
          />
          <button type="submit" onClick={checkLoggedIn}>Add to Cart</button>
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
