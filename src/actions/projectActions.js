import * as types from './actionTypes';

export function loadProjects(projects) {
  return { type: types.LOAD_PROJECTS, projects};
}
