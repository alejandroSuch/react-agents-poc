import { SET_CITY } from './ActionTypes';

export const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
