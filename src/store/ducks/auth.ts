import {
  ActionType,
  createAsyncAction,
  getType,
  Reducer,
  createAction,
} from 'typesafe-actions';
import { Auth, AuthState, ErrorMessage, OrderState } from '../typing';

export enum AuthConstants {
  LOGIN_REQUEST = 'auth/LOGIN_REQUEST',
  LOGIN_FAILURE = 'auth/LOGIN_FAILURE',
  LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS',

  CREATE_USER_REQUEST = 'auth/CREATE_USER_REQUEST',
  CREATE_USER_FAILURE = 'auth/CREATE_USER_FAILURE',
  CREATE_USER_SUCCESS = 'auth/CREATE_USER_SUCCESS',

  lOGOUT = 'auth/LOGOUT',
}

const authActions = {
  login: createAsyncAction(
    AuthConstants.LOGIN_REQUEST,
    AuthConstants.LOGIN_SUCCESS,
    AuthConstants.LOGIN_FAILURE
  )<{ username: string; password: string }, Auth, ErrorMessage>(),
  signUp: createAsyncAction(
    AuthConstants.CREATE_USER_REQUEST,
    AuthConstants.CREATE_USER_SUCCESS,
    AuthConstants.CREATE_USER_FAILURE
  )<
    { username: string; password: string; confirmPassword: string },
    void,
    ErrorMessage
  >(),
  logout: createAction(AuthConstants.lOGOUT)(),
};

type AuthActionType = ActionType<typeof authActions>;

const INITIAL_STATE: AuthState = {};

const auth: Reducer<AuthState, AuthActionType> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case getType(authActions.login.request):
      return { ...state, isLoading: true };
    case getType(authActions.login.success):
      return { isLoading: false, ...action.payload };
    case getType(authActions.login.failure):
      return { isLoading: false };
    case getType(authActions.logout):
      return {};
    default:
      return state;
  }
};

export { auth, authActions };
