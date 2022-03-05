import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';

const Navbar = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => {
    return !!state.auth.id;
  });

  const role = useSelector((state) => {
    return state.auth.role;
  });

  return (
    <div id="navbar">
      <nav>
        <div>
          <Link to="/home">
            <img src="PotStopLogo.png" />
          </Link>
          <Link id="shopNav" to="/pots">
            <img src="Pot.png" />
          </Link>
          <Link id="cartNav" to="/cart">
            <img src="Cart.png" />
          </Link>
        </div>
        {isLoggedIn ? (
          <div>
            {role === 'admin' ? (
              <div>
                <Link id="usersNav" to="/users">
                  Users
                </Link>
                <a id="logout" href="#" onClick={() => dispatch(logout())}>
                  Logout
                </a>
              </div>
            ) : (
              <div id="logout">
                <a href="#" onClick={() => dispatch(logout())}>
                  Logout
                </a>
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
