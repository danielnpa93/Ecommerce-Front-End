import { call, put, all, takeLatest } from 'redux-saga/effects';
import { authActions } from '../ducks/auth';
import { getType } from 'typesafe-actions';
import { auth, api } from '../api/agent';
import { handleError } from 'utils/notifications';

function* login({ payload }: any) {
  try {
    const {
      data: { token },
    } = yield call(auth.login, payload);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    yield put(authActions.login.success({ token }));
  } catch (error: any) {
    handleError(error?.message);
    yield put(authActions.login.failure(error));
  }
}

export default function* MySaga() {
  yield all([yield takeLatest(getType(authActions.login.request), login)]);
}
