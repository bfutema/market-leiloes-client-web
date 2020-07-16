import produce from 'immer';

import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_OUT } from './constants';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_REQUEST: {
        draft.loading = true;
        break;
      }

      case SIGN_IN_SUCCESS: {
        draft.loading = false;
        draft.token = action.payload.token;
        draft.signed = true;
        break;
      }

      case SIGN_OUT: {
        draft.token = null;
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
