import React, { useReducer } from 'react';

import { SET_CITY } from './ActionTypes';
import cityReducer from './reducer';
import fromCity from './selectors';

const CitiesSelector = ({ initialState, onSubmit }) => {
  const [state, dispatch] = useReducer(cityReducer, initialState);

  const city = fromCity.city(state);
  const setCity = value => dispatch({ type: SET_CITY, payload: value });

  return (
    <div style={{ border: '1px solid #dedede', margin: '8px', padding: '16px' }}>
      <h3>Block 1: city</h3>
      <div>
        <button onClick={() => setCity('Madrid')}>Set city to Madrid</button>&nbsp;
        <button onClick={() => setCity('Barcelona')}>Set city to Barcelona</button>
      </div>
      <button onClick={() => onSubmit(state)}>Submit {city} to parent</button>
    </div>
  );
};

export default CitiesSelector;
