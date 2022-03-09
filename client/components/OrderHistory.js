import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOldCart } from '../store/oldCart';

const OrderHistory = () => {
  const dispatch = useDispatch();
  const { oldCart } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getOldCart());
  }, []);

  return (
    <div id="oldCart">
      {oldCart.map((carts) => {
        carts.pots = carts.pots || [];
        return carts.pots.map((pot, idx) => {
          console.log(pot);
          return (
            <div className="oldCart-content" key={idx}>
              <img style={{ width: '100px' }} src={pot.imageUrl} />
              <div className="oldCart-subContent">
                <h4>{pot.description}</h4>
                <div>${pot.price}</div>
              </div>
            </div>
          );
        });
      })}
    </div>
  );
};

export default OrderHistory;