import axios from 'axios';

const TOKEN = 'token';

const SET_SINGLE_USER = 'SET_SINGLE_USER';

const _setSingleUser = (user) => ({
  type: SET_SINGLE_USER,
  user,
});

export const updateUser = (user) => {
  const token = window.localStorage.getItem(TOKEN);
  return async (dispatch) => {
    try {
      const { data } = await axios.put('/api/users', user, {
        headers: {
          authorization: token,
        },
      });
      dispatch(_setSingleUser(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const initState = {};

export default function singleUser(state = initState, action) {
  switch (action.type) {
    case SET_SINGLE_USER: {
      return action.user;
    }
    default:
      return state;
  }
}
