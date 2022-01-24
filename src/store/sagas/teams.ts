import { call, put, all, takeLatest } from 'redux-saga/effects';
import { teamsActions } from '../ducks/teams';
import { getType } from 'typesafe-actions';
import { deliveryTeams } from '../api/agent';
import { handleError, Notification } from 'utils/notifications';

function* getTeams() {
  try {
    const response = yield call(deliveryTeams.list);
    yield put(teamsActions.list.success(response));
  } catch (error: any) {
    if (error.status === 401) {
      return Notification('info', 'Section expired');
    }
    handleError(error?.message);
  }
}

export default function* MySaga() {
  yield all([yield takeLatest(getType(teamsActions.list.request), getTeams)]);
}
