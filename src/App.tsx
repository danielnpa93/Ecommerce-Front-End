import React from 'react';
import { GlobalStyle } from './styles/global';
import { store, history } from 'store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';
import { Routes } from './routes';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ToastContainer theme="dark" />
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </React.Fragment>
  );
}
