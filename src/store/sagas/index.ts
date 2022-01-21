import { all } from 'redux-saga/effects';

import Orders from './orders';

export default function* RootSaga() {
  yield all([Orders()]);
}
