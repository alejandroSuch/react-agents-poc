import React, { Fragment, useReducer, useEffect } from 'react';

import dispatchMiddleware from './state/effects';
import reducer from './state/reducer';
import * as fromAgents from './state/selectors';
import { loadAgentsAction, selectAgentAction } from './state/ActionTypes';

const initialStateFrom = agent => ({
  agents: null,
  selected: agent,
  loading: false,
  error: null,
});

const AgentSelector = ({ agent, onSubmit, onError }) => {
  // INIT STATE
  const [state, _dispatch] = useReducer(reducer, initialStateFrom(agent));
  const dispatch = dispatchMiddleware(_dispatch);

  // SELECT ELEMENTS TO RENDER OR USE
  const loading = fromAgents.loading(state);
  const agents = fromAgents.agents(state);
  const error = fromAgents.error(state);

  // EFFECTS
  useEffect(() => dispatch(loadAgentsAction()), []);
  useEffect(() => selectAgent(agent), [agent]);
  useEffect(() => {
    if (error) {
      onError(error);
    }
  }, [error]);

  // DISPATCH ACTIONS
  const selectAgent = agent => dispatch(selectAgentAction({ agent }));

  /**
   * OTHER LOGIC WOULD GO HERE (EX: VALIDATION)
   */

  // RENDER
  return (
    <div style={{ border: '1px solid #dedede', margin: '8px', padding: '8px' }}>
      <h3>Block 2: agents</h3>
      {loading && <h4>Loading...</h4>}
      {!loading && (
        <Fragment>
          <h4>Select a agent (you selected {fromAgents.selectedAgentName(state)} )</h4>
          {agents.map(({ id, name }) => (
            <button onClick={() => selectAgent({ id, name })} style={{ padding: '16px', margin: '8px' }} key={id}>
              {name}
            </button>
          ))}
          <div>
            <button onClick={() => onSubmit(fromAgents.selectedAgent(state))}>Submit to parent</button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default AgentSelector;
