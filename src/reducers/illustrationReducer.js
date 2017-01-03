import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function illustrationReducer(state = initialState.illustrations, action) {
  switch (action.type) {
    case types.LOAD_PROJECTS:
      return action.illustrations;

    default:
      return state;
  }
}
