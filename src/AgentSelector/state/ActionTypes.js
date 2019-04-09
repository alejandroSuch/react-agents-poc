export const LOAD_AGENTS = 'LOAD_AGENTS';
export const LOAD_AGENTS_SUCCESS = 'LOAD_AGENTS_SUCCESS';
export const LOAD_AGENTS_ERROR = 'LOAD_AGENTS_ERROR';
export const SELECT_AGENT = 'SELECT_AGENT';

export const loadAgentsAction = () => ({ type: LOAD_AGENTS });
export const loadAgentsSuccessAction = ({ agents }) => ({ type: LOAD_AGENTS_SUCCESS, payload: agents });
export const loadAgentsErrorAction = ({ message }) => ({ type: LOAD_AGENTS_ERROR, payload: message });
export const selectAgentAction = ({ agent }) => ({ type: SELECT_AGENT, payload: agent });
