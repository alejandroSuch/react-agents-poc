import { loadAgentsSuccessAction, loadAgentsErrorAction } from '../ActionTypes';

const loadAgents = async dispatch => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(response.statusText || `Error ${response.status}`);
    }

    const data = await response.json();
    const agents = data.map(({ id, name }) => ({ id, name }));
    dispatch(loadAgentsSuccessAction({ agents }));
  } catch (e) {
    dispatch(loadAgentsErrorAction({ message: e.message }));
  }
};

export default loadAgents;
