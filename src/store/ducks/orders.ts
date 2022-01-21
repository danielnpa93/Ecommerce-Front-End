import {
  ActionType,
  createAsyncAction,
  getType,
  Reducer,
} from 'typesafe-actions';
import { ErrorMessage, OrderState } from '../typing';

export enum OrderConstants {
  LIST_REQUEST = 'orders/LIST_REQUEST',
  LIST_FAILURE = 'orders/LIST_FAILURE',
  LIST_SUCCESS = 'orders/LIST_SUCCESS',
}

const ordersActions = {
  list: createAsyncAction(
    OrderConstants.LIST_REQUEST,
    OrderConstants.LIST_SUCCESS,
    OrderConstants.LIST_FAILURE
  )<void, OrderState, ErrorMessage>(),
};

type OrdersActionType = ActionType<typeof ordersActions>;

const INITIAL_STATE: OrderState = {};

const orders: Reducer<OrderState, OrdersActionType> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case getType(ordersActions.list.request):
      return { ...state, isLoading: true };
    case getType(ordersActions.list.success):
      return { isLoading: false, ...action.payload };
    case getType(ordersActions.list.failure):
      return { isLoading: false };
    default:
      return state;
  }
};

export { orders, ordersActions };
