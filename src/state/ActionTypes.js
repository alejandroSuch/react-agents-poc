export const HYDRATE_STATE = 'HYDRATE_STATE';
export const HYDRATE_STATE_SUCCESS = 'HYDRATE_STATE_SUCCESS';
export const MERGE_STATE = 'MERGE_STATE';
export const UPDATE_STATE = 'UPDATE_STATE';
export const CLEAR_STATE = 'CLEAR_STATE';

export const hydrateStateAction = () => ({ type: HYDRATE_STATE });
export const hydrateStateSuccessAction = ({ state }) => ({ type: HYDRATE_STATE_SUCCESS, payload: state });
export const mergeStateAction = ({ payload }) => ({ type: MERGE_STATE, payload });
export const updateStateAction = ({ state }) => ({ type: UPDATE_STATE, payload: state });
export const clearStateAction = () => ({ type: CLEAR_STATE });
