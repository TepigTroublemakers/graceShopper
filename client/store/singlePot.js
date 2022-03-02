import axios from 'axios';

// Action types
const SET_SINGLE_POT = 'SET_SINGLE_POT';

// Action creators
const setSinglePot = (pot) => {
  return {
    type: SET_SINGLE_POT,
    pot,
  };
};

// Thunk creators
export const getSinglePot = (id) => {
  return async (dispatch) => {
    try {
      const { data: singlePot } = await axios.get(`/api/pots/${id}`);
      dispatch(setSinglePot(singlePot));
    } catch (error) {
      console.error('Error in getSinglePot thunk!!');
    }
  };
};

// Initial state
const initState = {};

// Reducer
const singlePot = (state = initState, action) => {
  switch (action.type) {
    case SET_SINGLE_POT: {
      return action.pot;
    }
    default: {
      return state;
    }
  }
};

export default singlePot;
