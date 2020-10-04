import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateAvatarSuccess,
  deleteAvatarSuccess,
  deleteDocumentSuccess,
  deleteFilesInUnmountSuccess,
} from './actions';

import {
  UPDATE_AVATAR_REQUEST,
  DELETE_AVATAR_REQUEST,
  DELETE_DOCUMENT_REQUEST,
  DELETE_FILES_IN_UNMOUNT_REQUEST,
} from './constants';

export function* updateAvatar({ payload }) {
  try {
    const { avatar } = payload;

    const data = new FormData();

    data.append('avatar', avatar);

    const response = yield call(api.patch, '/users/avatar', data);

    toast.success('Avatar atualizado com sucesso.');

    yield put(updateAvatarSuccess(response.data));
  } catch (err) {
    toast.error('Oops! Ocorreu um erro ao atualizar o avatar.');
  }
}

export function* deleteAvatar({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `tempfiles/${id}`);

    toast.success('Avatar deletado com sucesso!');

    yield delay(1000);

    yield put(deleteAvatarSuccess());
  } catch (err) {
    toast.error(
      'Oops..! Houve uma falha ao deletar o seu avatar, tente novamente!'
    );
  }
}

export function* deleteDocument({ payload }) {
  try {
    const { id } = payload;

    yield delay(1000);

    yield call(api.delete, `tempfiles/${id}`);

    toast.success('Documento removido com sucesso!');

    yield put(deleteDocumentSuccess(id));
  } catch (err) {
    toast.error(
      'Oops..! Houve um problema ao remover o documento, tente novamente!'
    );
  }
}

export function* deleteAllFiles({ payload }) {
  const { ids } = payload;

  yield delay(1000);

  const deleteFilesPromise = ids.map((id) =>
    call(api.delete, `tempfiles/${id}`)
  );

  yield all(deleteFilesPromise);

  toast.info('Ok. Seu cadastro foi cancelado com sucesso!');

  yield put(deleteFilesInUnmountSuccess());
}

export default all([
  takeLatest(UPDATE_AVATAR_REQUEST, updateAvatar),
  takeLatest(DELETE_AVATAR_REQUEST, deleteAvatar),
  takeLatest(DELETE_DOCUMENT_REQUEST, deleteDocument),
  takeLatest(DELETE_FILES_IN_UNMOUNT_REQUEST, deleteAllFiles),
]);
