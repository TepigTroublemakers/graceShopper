import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFromDb } from '../store/users';

const AllUsers = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => {
    return {
      users: state.users,
    };
  });

  useEffect(() => {
    dispatch(getUsersFromDb());
  }, []);

  return (
    <div className="user-display-container">
      {users.map((user) => {
        return (
          <div key={user.id} className="user-display">
            <h1>{user.username}</h1>
            <h3>{user.role}</h3>
            <h3>{user.email}</h3>
          </div>
        )
      })}
    </div>
  );
};

export default AllUsers;
