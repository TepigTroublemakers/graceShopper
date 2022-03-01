import axios from 'axios';

//action types
const GET_USERS = "GET_USERS";

//action creators
const getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}

//thunk creators
export const getUsersFromDb = () => {
  return async function (dispatch) {
    const {data: users} = await axios.get('/users')
    dispatch(getUsers(users))
  }
}

let initialState = []
//reducer
const users = ( state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return state.users
    default:
      return state
  }
}

export default users
