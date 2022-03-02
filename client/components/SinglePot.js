import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSinglePot } from '../store/singlePot';

const SinglePot = () => {
  const { singlePot } = useSelector((state) => {
    return {
      singlePot: state.singlePot,
    };
  });

  const { potId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePot(potId));
  }, []);

  return (
    <div>
      <img src={singlePot.imageUrl} style={{ width: '350px' }} />
      <h2>{singlePot.description}</h2>
      <h4>Quantity On Hand: {singlePot.quantity}</h4>
      <h4>Price: ${singlePot.price}</h4>
      <h4>Category: {singlePot.category}</h4>
    </div>
  );
};

export default SinglePot;
