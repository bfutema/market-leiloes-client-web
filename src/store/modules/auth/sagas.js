import { all, takeLatest, call, put, delay } from 'redux-saga/effects';

import { SIGN_IN_REQUEST, SIGN_UP_REQUEST, SIGN_OUT } from './constants';
import { signInSuccess, signUpSuccess, signFailure } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  api.defaults.headers.Authorization = `Bearer ${token}`;

  yield put(signInSuccess(token, user));

  history.push('/profile');
}

export function* signUp({ payload }) {
  try {
    const {
      username,
      email,
      password,
      confirmPassword,
      name,
      surname,
      cpfCnpj,
      birth,
      rg,
      gender,
    } = payload;

    yield call(api.post, 'users', {
      username,
      email,
      password,
      confirmPassword,
      name,
      surname,
      cpfCnpj,
      birth,
      rg,
      gender,
    });

    yield delay(1000);

    yield put(signUpSuccess());
  } catch (err) {
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/');
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(SIGN_IN_REQUEST, signIn),
  takeLatest(SIGN_UP_REQUEST, signUp),
  takeLatest(SIGN_OUT, signOut),
]);
