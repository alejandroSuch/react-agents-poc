import { HYDRATE_STATE_SUCCESS, MERGE_STATE } from './ActionTypes';

export const initialState = {};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE_STATE_SUCCESS:
      return payload;
    case MERGE_STATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
