import { loadAgentsSuccessAction, loadAgentsErrorAction } from '../ActionTypes';

const loadAgents = async dispatch => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const agents = data.map(({ id, name }) => ({ id, name }));
    dispatch(loadAgentsSuccessAction({ agents }));
  } catch (err) {
    dispatch(loadAgentsErrorAction({ message: err.message }));
  }
};

export default loadAgents;
