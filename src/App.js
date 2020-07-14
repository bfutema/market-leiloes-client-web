import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';
import ResponsiveStyle from './styles/responsive';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <Footer />
          <GlobalStyle />
          <ResponsiveStyle />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
