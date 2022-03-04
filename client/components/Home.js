import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const { username } = useSelector((state) => {
    return state.auth;
  });

  const isLoggedIn = useSelector((state) => {
    return !!state.auth.id;
  });

  return (
    <div>
      {isLoggedIn ? (
        <div id="home">
          <h3>Welcome, {username}</h3>
          <img
            src="https://i.gyazo.com/8463f304aeeef4ab9922c833251db330.jpg"
            style={{ width: '500px' }}
          />
        </div>
      ) : (
        <div id="home">
          <img
            src="https://i.gyazo.com/8463f304aeeef4ab9922c833251db330.jpg"
            style={{ width: '500px' }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
