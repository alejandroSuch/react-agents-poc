import { HYDRATE_STATE_SUCCESS, MERGE_STATE, CLEAR_STATE } from './ActionTypes';

import { initialState as city } from '../CitiesSelector/state/reducer';
import { initialState as agentState } from '../AgentSelector/state/reducer';

// STATE MAPPERS
const mapAgentFrom = ({ agentState }) => ({ id: agentState.id, name: agentState.name });

// STATE
export const initialState = {
  city,
  agent: mapAgentFrom({ agentState }),
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
