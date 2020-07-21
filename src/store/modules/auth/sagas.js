import { all, takeLatest, call, put, delay } from 'redux-saga/effects';

import { SIGN_IN_REQUEST, SIGN_UP_REQUEST, SIGN_OUT } from './constants';
import { signInSuccess, signUpSuccess, signUpFailure } from './actions';

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
      cpfCnpj: cpf_cnpj,
      birth,
      rg,
      gender,
    } = payload;

    yield delay(1000);

    yield call(api.post, 'users', {
      username,
      email,
      password,
      confirmPassword,
      name,
      surname,
      cpf_cnpj: cpf_cnpj.replace(/\D/g, ''),
      birth,
      rg: rg.replace(/\D/g, ''),
      gender,
    });

    yield put(signUpSuccess());
  } catch (err) {
    yield put(signUpFailure());
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
