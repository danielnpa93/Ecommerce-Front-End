import { all } from 'redux-saga/effects';

import Orders from './orders';
import Auth from './auth';
import Teams from './teams';

export default function* RootSaga() {
  yield all([Orders(), Auth(), Teams()]);
}
