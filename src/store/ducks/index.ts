import { combineReducers } from 'redux';
import { orders } from './orders';
import { auth } from './auth';
import { connectRouter } from 'connected-react-router';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    orders,
    auth,
  });

export default createRootReducer;
