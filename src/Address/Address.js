import React, { useReducer, useEffect } from 'react';

import * as fromAddress from './state/selectors';
import reducer from './state/reducer';
import { setAddressAction } from './state/ActionTypes';
import dispatchMiddleware from './state/effects';

const Address = ({ address, onSubmit }) => {
  // INIT STATE
  const [state, _dispatch] = useReducer(reducer, address);
  const dispatch = dispatchMiddleware(_dispatch);

  // SELECT ELEMENTS TO RENDER OR USE
  const value = fromAddress.address(state);
  const error = fromAddress.error(state);

  // EFFECTS
  useEffect(() => handleAddressChanged(address), [address]);

  // DISPATCH ACTIONS
  const handleAddressChanged = address => dispatch(setAddressAction({ address }));

  /**
   * OTHER LOGIC WOULD GO HERE (EX: VALIDATION)
   */
  const handleSubmit = () => onSubmit(value);

  // RENDER
  return (
    <div style={{ border: '1px solid #dedede', margin: '8px', padding: '8px' }}>
      <h3>Block 3: Address</h3>
      <input type="text" value={value} onChange={event => handleAddressChanged(event.target.value)} />
      {error && <div style={{ fontSize: '11px', fontFamily: 'Verdana', color: 'red' }}>{error}</div>}
      <br />
      <button disabled={error} onClick={() => handleSubmit()}>
        Send {value} to parent
      </button>
    </div>
  );
};

export default Address;
