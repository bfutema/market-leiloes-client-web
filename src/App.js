import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Header from '~/components/Header';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';
import ResponsiveStyle from './styles/responsive';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <ResponsiveStyle />
    </Router>
  );
}

export default App;
