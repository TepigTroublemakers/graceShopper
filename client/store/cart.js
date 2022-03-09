import axios from 'axios';

// Token
const TOKEN = 'token';

// Action types
const GET_CART = 'GET_CART';
const ADD_POT = 'ADD_POT';
const DELETE_POT = 'DELETE_POT';

// Action creators
const getCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  };
};

// Thunk creators
export const getCartFromDB = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data: cart } = await axios.get(`/api/cart/`, {
        headers: {
          authorization: token,
        },
      });
      dispatch(getCart(cart));
    } catch (err) {
      console.error(err);
    }
  };
};

export const addToDbCart = (potId, quantity) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data: cart } = await axios.post(
          `/api/cart/${potId}`,
          { quantity: quantity },
          {
            headers: {
              authorization: token,
              'Content-Type': 'application/json',
            },
          }
        );
        dispatch(getCart(cart));
      }
    } catch (err) {
      console.error(err);
    }
  };
};

export const deletePot = (pot) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      if (token) {
        const { data } = await axios.put('/api/cart', pot, {
          headers: {
            authorization: token,
          },
        });
        dispatch(getCart(data));
      }
    } catch (error) {
      console.error('Error in deletePot thunk!!');
    }
  };
};

// Initial state
const initialState = {};

// Reducer
const cart = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: {
      return action.cart;
    }
    default:
      return state;
  }
};

export default cart;
