import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth';
import pots from './pots';
import users from './users';
import singlePot from './singlePot';
import singleUser from './editUser';

const reducer = combineReducers({ auth, pots, singlePot, users, singleUser });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from './auth';
