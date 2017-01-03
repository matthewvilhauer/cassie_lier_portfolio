import * as types from './actionTypes';

export function loadPosters(posters) {
  return { type: types.LOAD_POSTERS, posters};
}
