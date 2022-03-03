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
  const admins = users.filter((user) => {
    if(user.role === 'admin') return user
  })
  const customers = users.filter((user) => {
    if(user.role === 'customer') return user
  })
  return (
    <div>
      <h2>Admin</h2>
      <div className="user-display-container">{admins.map((user) => {
        return (
          <div key={user.id} className="user-display">
            <h1>{user.username}</h1>
            <h3>{user.email}</h3>
          </div>
        )
      })}</div>
      <h2>Customers</h2>
      <div className="user-display-container">{customers.map((user) => {
        return (
          <div key={user.id} className="user-display">
            <h1>{user.username}</h1>
            <h3>{user.email}</h3>
          </div>
        )
      })}</div>
    </div>
  );
};

export default AllUsers;
