import axios, { AxiosResponse } from 'axios';
import { Auth, OrderState, ResponseEnvelope, User } from '../typing';
import { urls } from './urls';
import { store } from '../';
import { authActions } from '../ducks/auth';

const api = axios.create({
  baseURL: '',
  timeout: 600000,
});

api.interceptors.response.use(
  response => {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      store.dispatch(authActions.logout());
    }
    return Promise.reject(error);
  }
);

const baseHeaders = (othersHeaders = {}) => ({
  headers: {
    'Content-Type': 'application/json',
    ...othersHeaders,
  },
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string, params = {}, headers?: any) =>
    api.get(url, { ...params, ...baseHeaders(headers) }).then(responseBody),
  post: (url: string, body: any, headers?: any) =>
    axios.post(url, body, baseHeaders(headers)).then(responseBody),
  delete: (url: string, headers?: any) =>
    axios.delete(url, baseHeaders(headers)).then(responseBody),
  put: (url: string, body: any, headers?: any) =>
    axios.put(url, body, baseHeaders(headers)).then(responseBody),
};

export const orders = {
  list: (query: { offset?: number; limit?: number }): Promise<any> =>
    requests.get(urls.ASYNC_GET_ORDER_LIST, query),
};

export const users = {
  create: (body: {
    username: string;
    password: string;
    confirmPassword: string;
  }): Promise<ResponseEnvelope<User>> =>
    requests.post(urls.ASYNC_CREATE_USER, body),
};

export const auth = {
  login: (body: {
    username: string;
    password: string;
  }): Promise<ResponseEnvelope<Auth>> => requests.post(urls.LOGIN, body),
};
