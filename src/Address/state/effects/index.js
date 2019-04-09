import { SET_ADDRESS, setErrorAction } from '../ActionTypes';

export const dispatchMiddleware = dispatch => action => {
  dispatch(action);

  switch (action.type) {
    case SET_ADDRESS:
      let error = 'Address length must be greater than 3';
      const { payload } = action;
      if (typeof payload === 'string' && payload.length > 3) {
        error = null;
      }
      dispatch(setErrorAction({ error }));
      break;
    default:
      break;
  }
};

export default dispatchMiddleware;
