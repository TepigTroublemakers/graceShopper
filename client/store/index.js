import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import pots from './pots';
import users from './users';
import singlePot from './singlePot';
import cart from './cart';
import oldCart from './oldCart';

import localCart from './localCart';

const reducer = combineReducers({
  auth,
  pots,
  singlePot,
  users,
  localCart,
  cart,
  oldCart,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
