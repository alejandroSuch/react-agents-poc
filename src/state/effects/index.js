import { HYDRATE_STATE, HYDRATE_STATE_SUCCESS, UPDATE_STATE } from '../ActionTypes';

const dispatchMiddleware = dispatch => action => {
  const PROPERTY_KEY = 'property';

  switch (action.type) {
    case HYDRATE_STATE:
      let prop = sessionStorage.getItem(PROPERTY_KEY) || '{}';
      dispatch({ type: HYDRATE_STATE_SUCCESS, payload: JSON.parse(prop) });
      break;
    default:
      sessionStorage.setItem(PROPERTY_KEY, JSON.stringify(action.payload));
  }

  dispatch(action);
};

export default dispatchMiddleware;
