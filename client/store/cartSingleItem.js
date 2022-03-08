import axios from 'axios';

// Token
const TOKEN = 'token';

// Action types
const GET_CART = 'GET_CART';
const ADD_POT = 'ADD_POT';

// Action creators
const getCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  };
};

const addPot = (cart) => {
  return {
    type: ADD_POT,
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
        console.log(cart);
        dispatch(addPot(cart));
      }
    } catch (err) {
      console.error(err);
    }
  };
};

// Initial state
const initialState = {};

// Reducer
const cartSingleItem = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: {
      return action.cart;
    }
    case ADD_POT: {
      return action.cart;
    }
    default:
      return state;
  }
};

export default cartSingleItem;
