import React, { useReducer, useEffect } from 'react';

import { SET_CITY } from './state/ActionTypes';
import cityReducer from './state/reducer';
import * as fromCity from './state/selectors';

const CitiesSelector = ({ city, onSubmit }) => {
  const [state, dispatch] = useReducer(cityReducer, city);

  const cityName = fromCity.city(state);
  const setCity = value => dispatch({ type: SET_CITY, payload: value });

  useEffect(() => {
    if (city !== fromCity.city(state)) {
      setCity(city);
    }
  }, [city]);

  return (
    <div style={{ border: '1px solid #dedede', margin: '8px', padding: '16px' }}>
      <h3>Block 1: city</h3>
      <div>
        <button onClick={() => setCity('Madrid')}>Set city to Madrid</button>&nbsp;
        <button onClick={() => setCity('Barcelona')}>Set city to Barcelona</button>
      </div>
      <button onClick={() => onSubmit(state)}>Submit {cityName} to parent</button>
    </div>
  );
};

export default CitiesSelector;
