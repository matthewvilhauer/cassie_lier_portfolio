import * as types from './actionTypes';

export function loadModels(models) {
  return { type: types.LOAD_MODELS, models};
}
