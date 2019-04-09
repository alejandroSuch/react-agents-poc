import React, { useReducer, useEffect } from 'react';
import './App.css';

import CitiesSelector from './CitiesSelector';
import AgentSelector from './AgentSelector';

import * as fromListing from './state/selectors';
import dispatchMiddleware from './state/effects';
import reducer, { initialState } from './state/reducer';
import { mergeStateAction, hydrateStateAction, updateStateAction, clearStateAction } from './state/ActionTypes';

const App = () => {
  // INIT STATE
  const [state, _dispatch] = useReducer(reducer, initialState);
  const dispatch = dispatchMiddleware(_dispatch);

  // SELECT ELEMENTS TO RENDER OR USE
  const city = fromListing.city(state);
  const agent = fromListing.agent(state);

  // EFFECTS
  useEffect(() => dispatch(hydrateStateAction()), []);
  useEffect(() => dispatch(updateStateAction({ state })), [state]);

  // DISPATCH ACTIONS
  const mergeState = payload => dispatch(mergeStateAction({ payload }));
  const clearState = () => dispatch(clearStateAction());

  /**
   * OTHER LOGIC WOULD GO HERE (EX: VALIDATION)
   */
  const handleError = error => alert(error);

  // RENDER
  return (
    <div className="App">
      <h3>Current state is</h3>
      <pre style={{ textAlign: 'left', border: '1px solid #dedede', display: 'inline-block', padding: '16px' }}>
        {JSON.stringify(state, null, 2)}
      </pre>
      <CitiesSelector city={city} onSubmit={city => mergeState({ city })} />
      <AgentSelector agent={agent} onSubmit={agent => mergeState({ agent })} onError={handleError} />
      <button onClick={() => clearState()}>Clear state</button>
    </div>
  );
};

export default App;
