import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFromDb } from '../store/users';

const AllUsers = () => {
  const { users } = useSelector((state) => {
    return {
      users: state.users
    }
  })

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersFromDb())
  }, [])

  return (
    <div>{
      users.map((user) => {
        return (
          <div>user.name</div>
        )
      })
    }</div>
  )
}

export default AllUsers
