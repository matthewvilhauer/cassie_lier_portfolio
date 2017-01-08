import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function threeDReducer(state = initialState.threeD_projects, action) {
  switch (action.type) {
    case types.LOAD_3D_PROJECTS:
      return action.threeD_projects;

    default:
      return state;
  }
}
