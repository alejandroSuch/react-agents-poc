import { HYDRATE_STATE_SUCCESS, MERGE_STATE, CLEAR_STATE } from './ActionTypes';

import { initialState as city } from '../CitiesSelector/state/reducer';
import { initialState as agent } from '../AgentSelector/state/reducer';

export const initialState = {
  city,
  agent,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case HYDRATE_STATE_SUCCESS:
      return payload;
    case MERGE_STATE:
      return { ...state, ...payload };
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
