import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_FAILURE,
  SIGN_OUT,
  SIGN_UP_FAILURE_DEL_FILES,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from './constants';

export function signInRequest(email, password) {
  return {
    type: SIGN_IN_REQUEST,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: { token, user },
  };
}

export function signUpRequest(newUser) {
  return {
    type: SIGN_UP_REQUEST,
    payload: { ...newUser },
  };
}

export function signUpSuccess() {
  return {
    type: SIGN_UP_SUCCESS,
  };
}

export function signUpFailure() {
  return {
    type: SIGN_UP_FAILURE,
  };
}

export function signFailure() {
  return {
    type: SIGN_FAILURE,
  };
}

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function deleteFilesInFailureRequest(ids) {
  return {
    type: SIGN_UP_FAILURE_DEL_FILES,
    payload: { ids },
  };
}

export function forgotPasswordRequest(email) {
  return {
    type: FORGOT_PASSWORD_REQUEST,
    payload: { email },
  };
}

export function forgotPasswordSuccess() {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
}

export function resetPasswordRequest(token, password) {
  return {
    type: RESET_PASSWORD_REQUEST,
    payload: { token, password },
  };
}

export function resetPasswordSuccess() {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
}
