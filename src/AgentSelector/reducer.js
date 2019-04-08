import { LOAD_AGENTS, LOAD_AGENTS_ERROR, LOAD_AGENTS_SUCCESS, SELECT_AGENT } from './ActionTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case LOAD_AGENTS:
      return { ...state, loading: true };
    case LOAD_AGENTS_SUCCESS:
      return { ...state, loading: false, homeAgents: payload };
    case LOAD_AGENTS_ERROR:
      return { ...state, loading: false, homeAgents: null };
    case SELECT_AGENT:
      return { ...state, selected: payload };
    default:
      return state;
  }
};

export default reducer;
