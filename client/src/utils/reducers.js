import { useReducer } from 'react';
import { ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT } from '../utils/actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_EVENT:
      return {
        ...state,
        events: [...action.events],
      };

    // if it's none of these actions,
    // do not update state
    default:
      return state;
  }
};


export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}