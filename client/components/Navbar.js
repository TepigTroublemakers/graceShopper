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
            <img src="https://i.gyazo.com/e5e5b6ced15f680ef17ddfff7d1cea61.png" />
          </Link>
          <Link id="shopNav" to="/pots?page=1">
            <img src="https://i.gyazo.com/e41dfa6d4eddb7eebe27c086f390091f.png" />
          </Link>
          <Link id="cartNav" to="/cart">
            <img src="https://i.gyazo.com/525d1202bf0e698bf40c3fd824e635ef.png" />
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
