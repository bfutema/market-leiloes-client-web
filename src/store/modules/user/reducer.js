import produce from 'immer';

import { SIGN_IN_SUCCESS, SIGN_OUT } from '../auth/constants';
import {
  SIGN_UP_NEW_CANDIDATE,
  SIGN_UP_STEP_ONE,
  SIGN_UP_STEP_TWO,
  UPLOAD_AVATAR_REQUEST,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_FAILURE,
  DELETE_AVATAR_SUCCESS,
  UPLOAD_DOCUMENTS_REQUEST,
  UPLOAD_DOCUMENTS_SUCCESS,
  UPLOAD_DOCUMENTS_FAILURE,
  DOCUMENTS_UPDATE_PROGRESS,
  DELETE_DOCUMENT_SUCCESS,
  DELETE_FILES_IN_UNMOUNT_SUCCESS,
} from './constants';

const INITIAL_STATE = {
  profile: null,
  newUser: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_UP_NEW_CANDIDATE: {
        draft.newUser = {
          accountType: action.payload.accountType,
        };
        break;
      }

      case SIGN_IN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }

      case SIGN_UP_STEP_ONE: {
        draft.newUser = {
          username: action.payload.username,
          email: action.payload.email,
          password: action.payload.password,
          confirmPassword: action.payload.confirmPassword,
        };
        break;
      }

      case SIGN_UP_STEP_TWO: {
        draft.newUser = {
          ...draft.newUser,
          name: action.payload.name,
          surname: action.payload.surname,
          cpfCnpj: action.payload.cpfCnpj,
          birth: action.payload.birth,
          rg: action.payload.rg,
          gender: action.payload.gender,
        };
        break;
      }

      case UPLOAD_AVATAR_REQUEST: {
        draft.newUser.avatar = action.payload.avatar;
        break;
      }

      case UPLOAD_AVATAR_SUCCESS: {
        draft.newUser.avatar.uploaded = true;
        draft.newUser.avatar.id = action.payload.id;
        draft.newUser.avatar.url = action.payload.url;
        break;
      }

      case UPLOAD_AVATAR_FAILURE: {
        draft.newUser.avatar.error = true;
        break;
      }

      case DELETE_AVATAR_SUCCESS: {
        draft.newUser.avatar = null;
        break;
      }

      case UPLOAD_DOCUMENTS_REQUEST: {
        draft.newUser.documents = [
          ...(state.newUser.documents || []),
          ...action.payload.documents,
        ];
        break;
      }

      case UPLOAD_DOCUMENTS_SUCCESS: {
        const updatedDocuments = state.newUser.documents.map((uploadedFile) => {
          return action.payload.fakeId === uploadedFile.id
            ? {
                ...uploadedFile,
                uploaded: true,
                id: action.payload.realId,
                url: action.payload.url,
              }
            : uploadedFile;
        });

        draft.newUser.documents = updatedDocuments;
        break;
      }

      case UPLOAD_DOCUMENTS_FAILURE: {
        draft.newUser.documents.error = true;
        break;
      }

      case DOCUMENTS_UPDATE_PROGRESS: {
        const updatedDocuments = state.newUser.documents.map((uploadedFile) => {
          return action.payload.id === uploadedFile.id
            ? { ...uploadedFile, progress: action.payload.progress }
            : uploadedFile;
        });

        draft.newUser.documents = updatedDocuments;
        break;
      }

      case DELETE_DOCUMENT_SUCCESS: {
        const filteredDocuments = state.newUser.documents.filter(
          (uploadedFile) => action.payload.id !== uploadedFile.id
        );
        draft.newUser.documents = filteredDocuments;
        break;
      }

      case DELETE_FILES_IN_UNMOUNT_SUCCESS: {
        draft.newUser.avatar = null;
        draft.newUser.documents = null;
        break;
      }

      case SIGN_OUT: {
        draft.profile = null;
        break;
      }

      default:
    }
  });
}
