import { LOAD_AGENTS } from '../ActionTypes';
import loadAgents from './loadAgents';

const dispatchMiddleware = dispatch => action => {
  switch (action.type) {
    case LOAD_AGENTS:
      loadAgents(dispatch);
      debugger;
      break;
    default:
      break;
  }

  dispatch(action);
};

export default dispatchMiddleware;
