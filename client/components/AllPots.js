import React, { useState, useEffect } from 'react';
import { getAllPots } from '../store/pots';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllPots = () => {
  const [filter, setFilter] = useState('');
  const [price, setPrice] = useState('');
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

  function handleFilter(e) {
    if (e.target.checked) {
      setFilter(e.target.value);
    }
  }

  function handlePriceFilter(e) {
    if (e.target.checked) {
      setPrice(e.target.value);
    }
  }

  function changePage(e) {
    e.preventDefault();
    setCurrentPage(Number(e.target.id));
    window.scrollTo(0, 0);
  }

  const indexOfLast = currentPage * contentPerPage;
  const indexOfFirst = indexOfLast - contentPerPage;
  const currentPots = pots
    .filter((pot) => {
      if (filter === '' || filter === 'all') {
        return pot;
      } else if (pot.category === filter) {
        return pot;
      }
    })
    .filter((pot) => {
      if (price === '' || price === 'all') {
        return pot;
      } else if (pot.price < 15 && price === '$') {
        return pot;
      } else if (pot.price > 15 && pot.price < 30 && price === '$$') {
        return pot;
      } else if (pot.price > 30 && price === '$$$') {
        return pot;
      }
    })
    .slice(indexOfFirst, indexOfLast);

  const allPots = currentPots.map((pot) => {
    return (
      <div key={pot.id} className="allSinglePotsRender">
        <Link to={`/pots/${pot.id}`}>
          <img src={pot.imageUrl} style={{ width: '200px' }} />
        </Link>
        <h3 className="allSinglePotsDesc">{pot.description}</h3>${pot.price}
        <div className="purchase">
          <form>
            <input
              className="buyAmount"
              type="number"
              min={0}
              max={pot.quantity}
            ></input>
            <button type="submit">Add to Cart</button>
          </form>
        </div>
      </div>
    );
  });

  const pageNumbers = [];
  for (
    let i = 1;
    i <=
    Math.ceil(
      pots
        .filter((pot) => {
          if (filter === '' || filter === 'all') {
            return pot;
          } else if (pot.category === filter) {
            return pot;
          }
        })
        .filter((pot) => {
          if (price === '' || price === 'all') {
            return pot;
          } else if (pot.price < 15 && price === '$') {
            return pot;
          } else if (pot.price > 15 && pot.price < 30 && price === '$$') {
            return pot;
          } else if (pot.price > 30 && price === '$$$') {
            return pot;
          }
        }).length / contentPerPage
    );
    i++
  ) {
    pageNumbers.push(i);
  }

  const allPageNum = pageNumbers.map((number) => {
    return (
      <button key={number} id={number} className="pages" onClick={changePage}>
        {number}
      </button>
    );
  });

  return (
    <div>
      <div id="filters">
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Filters:</div>
        <br></br>
        <div>
          Category
          <label>
            <input
              type="radio"
              id="reptiles"
              name="category"
              value="all"
              onChange={handleFilter}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="reptiles"
              onChange={handleFilter}
            />
            Reptiles
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="owls"
              onChange={handleFilter}
            />
            Owls
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="birds"
              onChange={handleFilter}
            />
            Birds
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="mammals"
              onChange={handleFilter}
            />
            Mammals
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="wacky"
              onChange={handleFilter}
            />
            Wacky
          </label>
          <label>
            <input
              type="radio"
              name="category"
              value="other"
              onChange={handleFilter}
            />
            Other
          </label>
        </div>
        <br></br>
        <div>
          Price
          <label>
            <input
              type="radio"
              name="price"
              value="all"
              onChange={handlePriceFilter}
            />
            All
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="$"
              onChange={handlePriceFilter}
            />
            $
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="$$"
              onChange={handlePriceFilter}
            />
            $$
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="$$$"
              onChange={handlePriceFilter}
            />
            $$$
          </label>
        </div>
      </div>
      <div id="allPotsRender">{allPots}</div>
      <div id="pageNumbers">{allPageNum}</div>
      {allPageNum.length ? (
        <div id="currentPage">Page: {currentPage}</div>
      ) : null}
    </div>
  );
};

export default AllPots;
