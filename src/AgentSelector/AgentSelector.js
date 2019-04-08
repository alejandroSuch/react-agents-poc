import React, { Fragment, useReducer, useEffect } from 'react';
import dispatchMiddleware from './state/effects';
import reducer from './state/reducer';
import * as fromAgents from './state/selectors';

import { SELECT_AGENT, LOAD_AGENTS } from './state/ActionTypes';

const initialStateFrom = homeAgent => ({
  homeAgents: null,
  selected: homeAgent,
  loading: false,
  error: null,
});

const AgentSelector = ({ homeAgent, onSubmit }) => {
  const [state, _dispatch] = useReducer(reducer, initialStateFrom(homeAgent));

  const dispatch = dispatchMiddleware(_dispatch);

  const loading = fromAgents.loading(state);
  const homeAgents = fromAgents.homeAgents(state);

  const selectAgent = homeAgent => dispatch({ type: SELECT_AGENT, payload: homeAgent });

  useEffect(() => dispatch({ type: LOAD_AGENTS }), []);
  useEffect(() => selectAgent(homeAgent), [homeAgent]);

  return (
    <div style={{ border: '1px solid #dedede', margin: '8px', padding: '8px' }}>
      <h3>Block 2: homeAgents</h3>
      {loading && <h4>Loading...</h4>}
      {!loading && (
        <Fragment>
          <h4>Select a homeAgent (you selected {fromAgents.selectedAgentName(state)} )</h4>
          {homeAgents.map(({ id, name }) => (
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
