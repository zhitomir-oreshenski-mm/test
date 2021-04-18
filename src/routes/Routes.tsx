import React, {Fragment} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Home} from '../components';
import {Navigation} from 'components-lib';

export const Routes = () => {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path={'/'} render={() => <Redirect to={'/home'} />} />
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </Fragment>
  );
};
