import { HYDRATE_STATE, hydrateStateSuccessAction, UPDATE_STATE } from '../ActionTypes';

import { initialState } from '../reducer';

const dispatchMiddleware = dispatch => action => {
  const PROPERTY_KEY = 'property';

  switch (action.type) {
    case HYDRATE_STATE:
      const prop = sessionStorage.getItem(PROPERTY_KEY) || JSON.stringify(initialState);
      const state = JSON.parse(prop);
      dispatch(hydrateStateSuccessAction({ state }));
      break;
    case UPDATE_STATE:
      sessionStorage.setItem(PROPERTY_KEY, JSON.stringify(action.payload));
      break;
    default:
      break;
  }

  dispatch(action);
};

export default dispatchMiddleware;
