import { LOAD_AGENTS, LOAD_AGENTS_ERROR, LOAD_AGENTS_SUCCESS, SELECT_AGENT } from './ActionTypes';

export const initialState = {
  id: null,
  name: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_AGENTS:
      return { ...state, loading: true };
    case LOAD_AGENTS_SUCCESS:
      return { ...state, loading: false, agents: payload };
    case LOAD_AGENTS_ERROR:
      return { ...state, loading: false, agents: null };
    case SELECT_AGENT:
      return { ...state, selected: payload };
    default:
      return state;
  }
};

export default reducer;
