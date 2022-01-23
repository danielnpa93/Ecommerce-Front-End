import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ordersActions } from '../ducks/orders';
import { getType } from 'typesafe-actions';
import { orders } from '../api/agent';
import { handleError, Notification } from 'utils/notifications';

function* getOrders() {
  try {
    const response = yield call(orders.list, {});
    yield put(ordersActions.list.success(response));
  } catch (error: any) {
    if (error.status === 401) {
      return Notification('info', 'Section expired');
    }
    handleError(error?.message);
  }
}

export default function* MySaga() {
  yield all([yield takeLatest(getType(ordersActions.list.request), getOrders)]);
}
