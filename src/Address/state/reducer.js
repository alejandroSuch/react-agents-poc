import { SET_ADDRESS, SET_ERROR } from './ActionTypes';

export const initialState = {
  value: null,
  error: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ADDRESS:
      return { ...state, value: payload };
    case SET_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default reducer;
