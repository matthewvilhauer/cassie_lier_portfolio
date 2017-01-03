import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function posterReducer(state = initialState.posters, action) {
  switch (action.type) {
    case types.LOAD_POSTERS:
      return action.posters;

    default:
      return state;
  }
}
