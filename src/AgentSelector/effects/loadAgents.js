import { LOAD_AGENTS_SUCCESS } from '../ActionTypes';

const loadAgents = async dispatch => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  const homeAgents = data.map(({ id, name }) => ({ id, name }));
  dispatch({ type: LOAD_AGENTS_SUCCESS, payload: homeAgents });
};

export default loadAgents;
