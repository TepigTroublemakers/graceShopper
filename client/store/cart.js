import axios from 'axios';

const TOKEN = 'token';

const GET_CART = "GET_CART";
const ADD_POT = "ADD_POT"

const getCart = (cart) => {
  return {
    type: GET_CART,
    cart
  }
}

const addPot = (cart) => {
  return {
    type: ADD_POT,
    cart
  }
}

export const getCartFromDB = () => {
  return async (dispatch) => {
    try {
      const { data: cart } = await axios.get(`/api/cart/`, {
        headers: {
          authorization: token
        }
      });
      dispatch(getCart(cart));
    }catch(err) {
      console.error(err)
    }
  }
}

export const addToDbCart = (potId, quantity) => {
  return async (dispatch) => {
    try {
      const token = window.localStorage.getItem(TOKEN)
      if(token){
        const { data: cart } = await axios.post(`/api/cart/${potId}`, quantity, {
        headers: {
          authorization: token
        }
        })
        console.log(cart);
        dispatch(addPot(cart))
      }
    } catch (err) {
      console.error(err)
    }
  }
}

const initialState = {}

const cart = (state = initialState, action) => {
  switch(action.type){
    case GET_CART:{
      return action.cart;
    }
    case ADD_POT:{
      return action.cart;
    }
    default:
      return state;
  }
}

export default cart;
