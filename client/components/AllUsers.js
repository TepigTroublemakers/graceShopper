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
    <div>
      {users.map((user) => {
        return <div>{user.username}</div>;
      })}
    </div>
  );
};

export default AllUsers;
