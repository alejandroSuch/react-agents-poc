import React, { useReducer, useEffect } from 'react';

import { setCityAction } from './state/ActionTypes';
import cityReducer from './state/reducer';
import * as fromCity from './state/selectors';

const CitiesSelector = ({ city, onSubmit }) => {
  // INIT STATE
  const [state, dispatch] = useReducer(cityReducer, city);

  // SELECT ELEMENTS TO RENDER OR USE
  const cityName = fromCity.city(state);

  // EFFECTS
  useEffect(() => {
    if (city !== fromCity.city(state)) {
      setCity(city);
    }
  }, [city]);

  // DISPATCH ACTIONS
  const setCity = city => dispatch(setCityAction({ city }));

  /**
   * OTHER LOGIC WOULD GO HERE (EX: VALIDATION)
   */

  // RENDER
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
