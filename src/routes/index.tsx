import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/typing';
import { PATHS } from './paths';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));
const Main = lazy(() => import('../pages/Main'));

export const Routes = () => {
  const hasToken = useSelector((state: RootState) => state.auth.token);

  return (
    <Router>
      <Switch>
        {!hasToken ? (
          <Route path={PATHS.LOGIN} exact component={Login} />
        ) : (
          <Route path={PATHS.MAIN} component={Main} />
        )}
      </Switch>
    </Router>
  );
};
