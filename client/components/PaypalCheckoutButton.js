import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { createCart } from '../store/cart';
import { getLocalCart } from '../store/localCart';
import { Redirect } from 'react-router';

const PaypalCheckoutButton = (props) => {
  const dispatch = useDispatch();
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const isLoggedIn = useSelector((state) => !!state.auth.id);

  const { cart } = useSelector((state) => state);
  const localCartData = JSON.parse(localStorage.getItem('data'));

  function handleApprove(orderId) {
    if (isLoggedIn) {
      axios
        .put(
          'api/cart/confirm',
          {
            cartId: cart.id,
          },
          {
            headers: {
              authorization: window.localStorage.getItem('token'),
            },
          }
        )
        .then(() => dispatch(createCart(cart.userId)));
    }
    localStorage.removeItem('data');
    dispatch(getLocalCart(localCartData));
    setPaidFor(true);
    if (error) {
      setError(
        'Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.'
      );
    }
  }

  return (
    <div>
      {paidFor === true ? <Redirect to="/purchased" /> : null}
      <PayPalButtons
        style={{
          color: 'silver',
          layout: 'vertical',
          height: 48,
          tagline: false,
          shape: 'pill',
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: product.price,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log('order: ', order);
          handleApprove(data.orderID);
        }}
        onError={(err) => {
          setError(err);
          console.error('PayPal Checkout onError', err);
        }}
        onCancel={() => {
          props.history.push('/cart');
        }}
      />
    </div>
  );
};

export default PaypalCheckoutButton;
