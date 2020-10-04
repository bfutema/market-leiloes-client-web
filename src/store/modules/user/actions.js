import {
  SIGN_UP_NEW_CANDIDATE,
  SIGN_UP_STEP_ONE,
  SIGN_UP_STEP_TWO,
  SIGN_UP_STEP_THREE,
  UPLOAD_AVATAR_REQUEST,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  DELETE_AVATAR_REQUEST,
  DELETE_AVATAR_SUCCESS,
  UPLOAD_DOCUMENTS_REQUEST,
  UPLOAD_DOCUMENTS_SUCCESS,
  UPLOAD_DOCUMENTS_FAILURE,
  DOCUMENTS_UPDATE_PROGRESS,
  DELETE_DOCUMENT_REQUEST,
  DELETE_DOCUMENT_SUCCESS,
  DELETE_FILES_IN_UNMOUNT_REQUEST,
  DELETE_FILES_IN_UNMOUNT_SUCCESS,
  UPDATE_AVATAR_REQUEST,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAILURE,
} from './constants';

export function newCandidate(account_type) {
  return {
    type: SIGN_UP_NEW_CANDIDATE,
    payload: { account_type },
  };
}

export function signUpStepOne(username, email, password, confirmPassword) {
  return {
    type: SIGN_UP_STEP_ONE,
    payload: { username, email, password, confirmPassword },
  };
}

export function signUpStepTwo(name, surname, cpfCnpj, birth, rg, gender) {
  return {
    type: SIGN_UP_STEP_TWO,
    payload: { name, surname, cpfCnpj, birth, rg, gender },
  };
}

export function signUpStepThree() {
  return {
    type: SIGN_UP_STEP_THREE,
  };
}

export function signUploadAvatarRequest(avatar) {
  return {
    type: UPLOAD_AVATAR_REQUEST,
    payload: { avatar },
  };
}

export function signUploadAvatarSuccess(id, url) {
  return {
    type: UPLOAD_AVATAR_SUCCESS,
    payload: { id, url },
  };
}

export function signUploadAvatarFailure() {
  return {
    type: UPLOAD_AVATAR_FAILURE,
  };
}

export function deleteAvatarRequest(id) {
  return {
    type: DELETE_AVATAR_REQUEST,
    payload: { id },
  };
}

export function deleteAvatarSuccess() {
  return {
    type: DELETE_AVATAR_SUCCESS,
  };
}

export function signUploadDocumentsRequest(documents) {
  return {
    type: UPLOAD_DOCUMENTS_REQUEST,
    payload: { documents },
  };
}

export function signUploadDocumentsSuccess(fakeId, realId, url) {
  return {
    type: UPLOAD_DOCUMENTS_SUCCESS,
    payload: { fakeId, realId, url },
  };
}

export function signUploadDocumentsFailure() {
  return {
    type: UPLOAD_DOCUMENTS_FAILURE,
  };
}

export function signUploadDocumentsUpdateProgress(id, progress) {
  return {
    type: DOCUMENTS_UPDATE_PROGRESS,
    payload: { id, progress },
  };
}

export function deleteDocumentRequest(id) {
  return {
    type: DELETE_DOCUMENT_REQUEST,
    payload: { id },
  };
}

export function deleteDocumentSuccess(id) {
  return {
    type: DELETE_DOCUMENT_SUCCESS,
    payload: { id },
  };
}

export function deleteFilesInUnmountRequest(ids) {
  return {
    type: DELETE_FILES_IN_UNMOUNT_REQUEST,
    payload: { ids },
  };
}

export function deleteFilesInUnmountSuccess() {
  return {
    type: DELETE_FILES_IN_UNMOUNT_SUCCESS,
  };
}

export function updateAvatarRequest(avatar) {
  return {
    type: UPDATE_AVATAR_REQUEST,
    payload: { avatar },
  };
}

export function updateAvatarSuccess(updatedAvatar) {
  return {
    type: UPDATE_AVATAR_SUCCESS,
    payload: { updatedAvatar },
  };
}

export function updateAvatarFailure() {
  return {
    type: UPDATE_AVATAR_FAILURE,
  };
}
