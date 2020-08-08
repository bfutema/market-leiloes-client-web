import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/register" component={SignUp} auth />
      <Route path="/login" component={SignIn} auth />
      <Route path="/forgot_password" component={ForgotPassword} />
      <Route path="/reset_password" component={ResetPassword} />

      {/* <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
