const GET_LOCAL_CART = 'GET_LOCAL_CART';

const _getLocalCart = (cart) => ({
  type: GET_LOCAL_CART,
  cart,
});

export const getLocalCart = () => {
  return async (dispatch) => {
    try {
      const data = JSON.parse(localStorage.getItem('data'));
      dispatch(_getLocalCart(data));
    } catch (error) {
      console.error('Error in getLocalCart thunk!!');
    }
  };
};

const initState = {};

const localCart = (state = initState, action) => {
  switch (action.type) {
    case GET_LOCAL_CART: {
      return action.cart;
    }
    default:
      return state;
  }
};

export default localCart;
