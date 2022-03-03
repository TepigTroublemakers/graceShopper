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
    <div>
      <h1>PotStop</h1>
      <nav>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/pots">Pots</Link>
          <Link id="cartNav" to="/cart">
            Cart
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
          <div id="loginSignup">
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
