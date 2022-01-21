import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './ducks';
import createSagaMiddleware from '@redux-saga/core';
import RootSaga from './sagas';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const history = createBrowserHistory();

  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(RootSaga);

  return { store, history };
}

const { store, history } = configureStore();

export { store, history };
