import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Header from '~/components/Header';
import Footer from '~/components/Footer';

import Routes from './routes';
import history from './services/history';

import GlobalStyle from './styles/global';
import ResponsiveStyle from './styles/responsive';

import light from './styles/themes/light';

import { store, persistor } from './store';

function App() {
  return (
    <ThemeProvider theme={light}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Header />
            <Routes />
            <Footer />
            <GlobalStyle />
            <ResponsiveStyle />
            <ToastContainer autoClose={3000} />
          </Router>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
