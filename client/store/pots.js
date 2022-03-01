import axios from 'axios';

// Set action types
const SET_ALL_POTS = 'SET_ALL_POTS';

// Action creators
const setAllPots = (pots) => {
  return {
    type: SET_ALL_POTS,
    pots,
  };
};

// Thunk creators
export const getAllPots = () => {
  return async (dispatch) => {
    try {
      const { data: allPots } = await axios.get('/api/pots');
      dispatch(setAllPots(allPots));
    } catch (error) {
      console.error('Error in getAllPots thunk!!');
    }
  };
};

// Initial state
const initState = [];

// Reducer
const potsReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ALL_POTS: {
      return action.allPots;
    }
    default:
      return state;
  }
};

export default potsReducer;
