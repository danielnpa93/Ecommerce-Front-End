import React from 'react';
import { GlobalStyle } from './styles/global';
import { store, history } from 'store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Routes } from './routes';

export function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </React.Fragment>
  );
}
