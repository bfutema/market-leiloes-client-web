import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import ResetPassword from '~/pages/ResetPassword';
import NewProduct from '~/pages/NewProduct';
import Menu from '~/pages/Menu';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/register" component={SignUp} auth />
      <Route path="/login" component={SignIn} auth />
      <Route path="/forgot_password" component={ForgotPassword} />
      <Route path="/reset_password" component={ResetPassword} />

      <Route path="/profile" component={Menu} isPrivate />
      <Route path="/account" component={Menu} isPrivate />
      <Route path="/password" component={Menu} isPrivate />
      <Route path="/products" component={Menu} isPrivate />

      <Route path="/new_product" component={NewProduct} isPrivate />
      {/* <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
