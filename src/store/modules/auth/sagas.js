import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  SIGN_IN_REQUEST,
  SIGN_UP_REQUEST,
  SIGN_OUT,
  SIGN_UP_FAILURE_DEL_FILES,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
} from './constants';
import {
  signInSuccess,
  signUpSuccess,
  signUpFailure,
  deleteFilesInFailureRequest,
  forgotPasswordSuccess,
  resetPasswordSuccess,
} from './actions';
import { deleteFilesInUnmountSuccess } from '../user/actions';

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
  const { callback, avatar, documents } = payload;

  const documents_ids =
    (!avatar && documents) || (avatar && documents)
      ? documents.map((document) => document.id)
      : [];

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
      avatar_id: avatar && avatar.id,
      documents_ids,
    });

    toast.info('Cadastro enviado com sucesso.');

    yield put(signUpSuccess());
  } catch (err) {
    if (documents_ids.length > 0) {
      const ids = [];

      ids.push(avatar.id);
      documents_ids.map((id) => ids.push(id));

      yield put(deleteFilesInFailureRequest(ids));
    }

    yield delay(3000);

    callback();

    toast.info(
      'Oops..! Ocorreu um erro ao enviar seu cadastro, por favor tente novamente.'
    );

    yield put(signUpFailure());
  }
}

export function signOut() {
  history.push('/');
}

export function* deleteAllFiles({ payload }) {
  const { ids } = payload;

  yield delay(1000);

  const deleteFilesPromise = ids.map((id) =>
    call(api.delete, `tempfiles/${id}`)
  );

  yield all(deleteFilesPromise);

  yield put(deleteFilesInUnmountSuccess());
}

export function* forgot({ payload }) {
  const { email } = payload;

  yield call(api.post, 'password/forgot', { email });

  toast.success(
    'Enviamos um e-mail de verificação. Verifique sua caixa de entrada.'
  );

  yield put(forgotPasswordSuccess());

  history.push('/login');
}

export function* reset({ payload }) {
  const { token, password } = payload;

  yield call(api.post, 'password/reset', { password, token });

  toast.success('Senha alterada com sucesso.');

  yield put(resetPasswordSuccess());

  history.push('/login');
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
  takeLatest(SIGN_UP_FAILURE_DEL_FILES, deleteAllFiles),
  takeLatest(FORGOT_PASSWORD_REQUEST, forgot),
  takeLatest(RESET_PASSWORD_REQUEST, reset),
]);
