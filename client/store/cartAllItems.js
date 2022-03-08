import axios from 'axios';

// Token
const TOKEN = 'token';

// Action type
const DELETE_POT = 'DELETE_POT';

// Action creator
const _deletePot = (pot) => {
  return {
    type: DELETE_POT,
    pot,
  };
};

// Thunk creator
export const deletePot = (potId) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data: deletedPot } = await axios.delete(`/api/cart/${potId}`);
        dispatch(_deletePot(deletedPot));
      }
    } catch (error) {
      console.error('Error in deletePot thunk!!');
    }
  };
};

// Initial state
const initialState = [];

// Reducer
const cartSingleItem = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POT: {
      return state.filter((pot) => pot.id !== action.pot.id);
    }
    default:
      return state;
  }
};

export default cartSingleItem;
