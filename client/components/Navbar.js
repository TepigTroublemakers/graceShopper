import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';

const Navbar = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => {
    return !!state.auth.id;
  });

  const { username, role } = useSelector((state) => {
    return state.auth;
  });

  const localCart = useSelector((state) => {
    return state.localCart;
  });

  function countCart() {
    if (localCart) {
      let count = 0;
      for (let i = 0; i < localCart.length; i++) {
        count += Number(localCart[i].quantity);
      }
      return count;
    } else {
      return 0;
    }
  }

  return (
    <div id="navbar">
      <nav>
        <div>
          <Link to="/home">
            <img src="https://i.gyazo.com/e5e5b6ced15f680ef17ddfff7d1cea61.png" />
          </Link>
          <Link id="shopNav" to="/pots?page=1">
            <img src="https://i.gyazo.com/e41dfa6d4eddb7eebe27c086f390091f.png" />
          </Link>
          <Link id="cartNav" to="/cart">
            {countCart() !== 0 ? <div id="countCart">{countCart()}</div> : null}
            <img src="https://i.gyazo.com/525d1202bf0e698bf40c3fd824e635ef.png" />
          </Link>
        </div>
        {isLoggedIn ? (
          <div>
            {role === 'admin' ? (
              <div>
                <div className="dropdown">
                  <button>{username}</button>
                  <div className="dropdown-content">
                    <Link to="/users">Users</Link>
                    <Link to="/edit">Edit</Link>
                    <a href="#" onClick={() => dispatch(logout())}>
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="dropdown">
                <button>{username}</button>
                <div className="dropdown-content">
                  <Link to="/edit">Edit</Link>
                  <a href="#" onClick={() => dispatch(logout())}>
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div id="login">
            <Link to="/login">Login</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
