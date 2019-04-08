import React, { useReducer, useEffect } from 'react';
import './App.css';

import CitiesSelector from './CitiesSelector';
import AgentSelector from './AgentSelector';

import * as fromListing from './state/selectors';
import dispatchMiddleware from './state/effects';
import reducer, { initialState } from './state/reducer';
import { MERGE_STATE, HYDRATE_STATE, UPDATE_STATE } from './state/ActionTypes';

// EFFECTS
const initialize = ({ dispatch }) => dispatch({ type: HYDRATE_STATE });
const handleStateChanged = ({ state, dispatch }) => dispatch({ type: UPDATE_STATE, payload: state });

const App = () => {
  const [state, _dispatch] = useReducer(reducer, initialState);
  const dispatch = dispatchMiddleware(_dispatch);

  useEffect(() => initialize({ dispatch }), []);
  useEffect(() => handleStateChanged({ state, dispatch }), [state]);

  const mergeState = payload => dispatch({ type: MERGE_STATE, payload });

  return (
    <div className="App">
      <h3>Current state is</h3>
      <pre style={{ textAlign: 'left', border: '1px solid #dedede', display: 'inline-block', padding: '16px' }}>
        {JSON.stringify(state, null, 2)}
      </pre>
      <CitiesSelector city={fromListing.city(state)} onSubmit={city => mergeState({ city })} />
      <AgentSelector homeAgent={fromListing.homeAgent(state)} onSubmit={homeAgent => mergeState({ homeAgent })} />
    </div>
  );
};

export default App;
