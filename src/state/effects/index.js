import { HYDRATE_STATE, hydrateStateSuccessAction, UPDATE_STATE } from '../ActionTypes';

import { initialState } from '../reducer';

const dispatchMiddleware = dispatch => action => {
  const PROPERTY_KEY = 'property';
  dispatch(action);

  switch (action.type) {
    case HYDRATE_STATE:
      const prop = sessionStorage.getItem(PROPERTY_KEY) || JSON.stringify(initialState);
      const state = JSON.parse(prop);
      dispatch(hydrateStateSuccessAction({ state }));
      break;
    default:
      sessionStorage.setItem(PROPERTY_KEY, JSON.stringify(action.payload));
      break;
  }
};

export default dispatchMiddleware;
