import * as types from './actionTypes';

export function load3D(threeD_projects) {
  return { type: types.LOAD_3D_PROJECTS, threeD_projects};
}
