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
        return <div>pot</div>;
      })}
    </div>
  );
};

export default AllPots;
