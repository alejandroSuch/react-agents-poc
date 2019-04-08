import React, { useReducer, useEffect } from 'react';
import './App.css';

import CitiesSelector from './CitiesSelector';
import AgentSelector from './AgentSelector';

// ACTION TYPES
const ActionTypes = {
  HYDRATE_STATE: 'HYDRATE_STATE',
  HYDRATE_STATE_SUCCESS: 'HYDRATE_STATE_SUCCESS',
  MERGE_STATE: 'MERGE_STATE',
};

// REDUCERS
const initialState = {};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.HYDRATE_STATE_SUCCESS:
      return payload;
    case ActionTypes.MERGE_STATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

// SELECTORS
const fromListing = {
  city: state => state.city,
  homeAgent: state => state.homeAgent,
};

// EFFECTS
const PROPERTY_KEY = 'property';
const initialize = ({ dispatch }) => dispatch({ type: ActionTypes.HYDRATE_STATE });
const handleStateChanged = ({ state }) => sessionStorage.setItem(PROPERTY_KEY, JSON.stringify(state));

// MIDDLEWARE TO USE SIDE EFFECTS
const dispatchMiddleware = dispatch => action => {
  switch (action.type) {
    case ActionTypes.HYDRATE_STATE:
      let prop = sessionStorage.getItem(PROPERTY_KEY) || '{}';
      dispatch({ type: ActionTypes.HYDRATE_STATE_SUCCESS, payload: JSON.parse(prop) });
      break;
    default:
      dispatch(action);
  }
};

const App = () => {
  const [state, _dispatch] = useReducer(reducer, initialState);
  const dispatch = dispatchMiddleware(_dispatch);

  useEffect(() => initialize({ dispatch }), []);
  useEffect(() => handleStateChanged({ state }), [state]);

  const mergeState = payload => dispatch({ type: ActionTypes.MERGE_STATE, payload });

  return (
    <div className="App">
      <h3>Current city is {fromListing.city(state)}</h3>
      <pre>{JSON.stringify(state, 2)}</pre>
      <CitiesSelector city={fromListing.city(state)} onSubmit={city => mergeState({ city })} />
      <AgentSelector homeAgent={fromListing.homeAgent(state)} onSubmit={homeAgent => mergeState({ homeAgent })} />
    </div>
  );
};

export default App;
