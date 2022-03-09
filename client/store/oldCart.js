import axios from 'axios';

const TOKEN = 'token';
const GET_CART = 'GET_CART';

const getCart = (cart) => ({
  type: GET_CART,
  cart,
});

export const getOldCart = () => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN);
      const { data } = await axios.get('/api/cart/orders', {
        headers: { authorization: token },
      });
      dispatch(getCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initState = [];

export default function oldCart(state = initState, action) {
  switch (action.type) {
    case GET_CART: {
      return action.cart;
    }
    default:
      return state;
  }
}
