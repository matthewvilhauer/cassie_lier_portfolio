import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import projects from './projectReducer';
import illustrations from './illustrationReducer';
import posters from './posterReducer';
import models from './modelReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
	projects,
	illustrations,
	posters,
	models,
  ajaxCallsInProgress
});

export default rootReducer;
