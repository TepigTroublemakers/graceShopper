import React from 'react';
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

  const { localCart, cart } = useSelector((state) => {
    return state;
  });

  const DBcart = cart.pots || [];

  function countLocalCart() {
    if (localCart) {
      let count = 0;
      for (let i = 0; i < localCart.length; i++) {
        count += Number(localCart[i].quantity);
      }
      return count;
    }
    return 0;
  }

  function countDBCart() {
    if (isLoggedIn) {
      let count = 0;
      for (let i = 0; i < DBcart.length; i++) {
        count += Number(DBcart[i].cartPot.quantity);
      }
      return count;
    }
    return 0;
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
            {isLoggedIn ? (
              countDBCart() !== 0 ? (
                <div id="countCart">{countDBCart()}</div>
              ) : null
            ) : countLocalCart() !== 0 ? (
              <div id="countCart">{countLocalCart()}</div>
            ) : null}
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
