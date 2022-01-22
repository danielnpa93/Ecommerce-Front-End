import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/typing';
import { PATHS } from './paths';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Login from 'pages/Login';
import Main from 'pages/Main';

export const Routes = () => {
  const hasToken = useSelector((state: RootState) => state.auth.token);

  return (
    <Router>
      <Switch>
        {!hasToken ? (
          <Route path={PATHS.HOME} exact component={Login} />
        ) : (
          <Route path={PATHS.HOME} exact component={Main} />
        )}
      </Switch>
    </Router>
  );
};
