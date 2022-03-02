import React, { useEffect } from 'react';
import { getAllPots } from '../store/pots';
import { useDispatch, useSelector } from 'react-redux';

const AllPots = () => {
  const { pots } = useSelector((state) => {
    return {
      pots: state.pots,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPots());
  }, []);

  return (
    <div>
      {pots.map((pot) => {
        return (
          <div>
            <img src={pot.imageUrl} style={{ width: '200px' }} />
            <h3>{pot.description}</h3>
            <h5>${pot.price}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllPots;
