import * as types from './actionTypes';

export function loadIllustrations(illustrations) {
  return { type: types.LOAD_PROJECTS, illustrations};
}
