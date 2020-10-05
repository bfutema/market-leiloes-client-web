import produce from 'immer';

import {
  CREATE_NEW_PRODUCT_REQUEST,
  CREATE_NEW_PRODUCT_SUCCESS,
  CREATE_NEW_PRODUCT_FAILURE,
} from './constants';

const INITIAL_STATE = {
  newProduct: {
    photos: [],
  },
  loading: false,
};

export default function product(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case CREATE_NEW_PRODUCT_REQUEST: {
        draft.newProduct = { loading: true };
        break;
      }

      case CREATE_NEW_PRODUCT_SUCCESS: {
        draft.newProduct = { loading: false, ...payload };
        break;
      }

      case CREATE_NEW_PRODUCT_FAILURE: {
        draft.newProduct = { loading: false };
        break;
      }

      default:
    }
  });
}
