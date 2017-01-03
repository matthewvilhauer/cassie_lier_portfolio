import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import projects from './projectReducer';
import illustrations from './illustrationReducer';
import posters from './posterReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
	projects,
	illustrations,
	posters,
  ajaxCallsInProgress
});

export default rootReducer;
