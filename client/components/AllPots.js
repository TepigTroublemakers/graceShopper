import React, { useState, useEffect } from 'react';
import { getAllPots } from '../store/pots';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';

const AllPots = (props) => {
  const [filter, setFilter] = useState('');
  const [totalPage, setTotalPage] = useState(1);

  const { pots } = useSelector((state) => {
    return {
      pots: state.pots,
    };
  });

  const dispatch = useDispatch();
  
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  // o: this is a magic number, create a constant to improve clarity
  const filterType = props.location.search.substring(17);

  useEffect(() => {
    // o: look into using useHistory and useLocation hooks to shorten some of this code
    let currentPageQuery = props.location.search.split('=')[1].split('&')[0];
    if (props.location.search === '' || currentPageQuery == 0) {
      props.history.push('/pots?page=1');
    }
    if (filter !== '') {
      props.history.push(`/pots?page=1&category=${filter}`);
    }
    if (filter === '') {
      props.history.push(`/pots?page=${currentPageQuery}`);
    }
  }, [filter]);

  useEffect(() => {
    dispatch(getAllPots(props.location));
  }, [props.location.search]);

  useEffect(() => {
    if (filter !== '') {
      axios
        .get(`/api/pots?category=${filter}`)
        .then((res) => setTotalPage(Math.ceil(res.data.length / 10)));
    }
    if (filter === '') {
      axios
        .get('/api/pots')
        .then((res) => setTotalPage(Math.ceil(res.data.length / 10)));
    }
  }, [filter]);

  function handleFilter(e) {
    if (e.target.checked) {
      setFilter(e.target.value);
    }
  }

  return (
    <div>
      <div id="filters">
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Filters:</div>
        <br></br>
        <div>
          Category
          {/* o: might be better to calculate this above and render here */}
          {['', 'birds', 'owls', 'reptiles', 'mammals', 'wacky', 'combos', 'tepig', 'classics'].map(
            (category, idx) => {
              return (
                <label key={idx}>
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    onChange={handleFilter}
                    checked={filterType === category ? true : false}
                  />
                  {category === '' ? 'All' : null}
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </label>
              );
            }
          )}
        </div>
      </div>
      <div>
        <div id="allPotsRender">
          {/* o: might be better to calculate this above and render here */}
          {pots
            .filter((pot) => {
              if (filter === '') {
                return pot;
              } else if (pot.category === filter) {
                return pot;
              }
            })
            .map((pot) => {
              return (
                <div key={pot.id} className="allSinglePotsRender">
                  <Link to={`/pots/${pot.id}`}>
                    <img src={pot.imageUrl} style={{ width: '200px' }} />
                  </Link>
                  ${pot.price}
                  <h3 className="allSinglePotsDesc">{pot.description}</h3>
                </div>
              );
            })}
        </div>
        <div id="pageNumbers">
          {pageNumbers.map((number, i) => {
            return (
              <button
                key={number}
                id={number}
                className={
                  Number(props.location.search.split('=')[1].split('&')[0]) ===
                  i + 1
                    ? 'current-page'
                    : 'pages'
                }
                onClick={() => {
                  if (filter === '') {
                    props.history.push(`/pots?page=${number}`);
                  }
                  if (filter !== '') {
                    props.history.push(
                      `/pots?page=${number}&category=${filter}`
                    );
                  }
                  window.scroll(0, 0);
                }}
              >
                {number}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllPots;
