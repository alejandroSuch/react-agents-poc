export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_ERROR = 'SET_ERROR';

export const setAddressAction = ({ address }) => ({ type: SET_ADDRESS, payload: address });
export const setErrorAction = ({ error }) => ({ type: SET_ERROR, payload: error });
