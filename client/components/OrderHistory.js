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
      {oldCart.length ? (
        oldCart.map((carts) => {
          carts.pots = carts.pots || [];
          return carts.pots.map((pot, idx) => {
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
        })
      ) : (
        <div id="noOldCart">
          <h1>No Order History</h1>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
