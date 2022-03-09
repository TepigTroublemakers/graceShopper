import React, { useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PaypalCheckoutButton = (props) => {
  const { product } = props;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  function handleApprove(orderId) {
    setPaidFor(true);
    if (error) {
      setError(
        'Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.'
      );
    }
  }

  return (
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
        console.log('order', order);

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
  );
};

export default PaypalCheckoutButton;
