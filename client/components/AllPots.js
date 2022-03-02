import React, { useState, useEffect } from 'react';
import { getAllPots } from '../store/pots';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllPots = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const contentPerPage = 10;

  const { pots } = useSelector((state) => {
    return {
      pots: state.pots,
    };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPots());
  }, []);

  function changePage(e) {
    e.preventDefault();
    setCurrentPage(Number(e.target.id));
  }

  const indexOfLast = currentPage * contentPerPage;
  const indexOfFirst = indexOfLast - contentPerPage;
  const currentPots = pots.slice(indexOfFirst, indexOfLast);

  const allPots = currentPots.map((pot) => {
    return (
      <div key={pot.id} className="allSinglePotsRender">
        <img src={pot.imageUrl} style={{ width: '200px' }} />
        <Link to={`/pots/${pot.id}`}>
          <h3 className="allSinglePotsDesc">{pot.description}</h3>
        </Link>
        <h5>${pot.price}</h5>
      </div>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pots.length / contentPerPage); i++) {
    pageNumbers.push(i);
  }

  const allPageNum = pageNumbers.map((number) => {
    return (
      <div key={number} id={number} className="pages" onClick={changePage}>
        {number}
      </div>
    );
  });

  return (
    <div>
      <div id="allPotsRender">{allPots}</div>
      <div id="pageNumbers">{allPageNum}</div>
      <div id="currentPage">Page: {currentPage}</div>
    </div>
  );
};

export default AllPots;
