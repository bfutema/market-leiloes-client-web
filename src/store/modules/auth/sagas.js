import { all, takeLatest, call, put } from 'redux-saga/effects';

import { SIGN_IN_REQUEST } from './constants';
import { signInSuccess } from './actions';

import api from '~/services/api';
import history from '~/services/history';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  yield put(signInSuccess(token, user));

  history.push('/profile');
}

export default all([takeLatest(SIGN_IN_REQUEST, signIn)]);
