import {
  ActionType,
  createAsyncAction,
  getType,
  Reducer,
} from 'typesafe-actions';
import { ErrorMessage } from '../typing';

export enum TeamsConstants {
  LIST_REQUEST = 'teams/LIST_REQUEST',
  LIST_FAILURE = 'teams/LIST_FAILURE',
  LIST_SUCCESS = 'teams/LIST_SUCCESS',
}

const teamsActions = {
  list: createAsyncAction(
    TeamsConstants.LIST_REQUEST,
    TeamsConstants.LIST_SUCCESS,
    TeamsConstants.LIST_FAILURE
  )<void, any, ErrorMessage>(),
};

type TeamsActionType = ActionType<typeof teamsActions>;

const INITIAL_STATE = {};

const teams: Reducer<any, TeamsActionType> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case getType(teamsActions.list.request):
      return { ...state, isLoading: true };
    case getType(teamsActions.list.success):
      return { isLoading: false, ...action.payload };
    case getType(teamsActions.list.failure):
      return { isLoading: false };
    default:
      return state;
  }
};

export { teams, teamsActions };
