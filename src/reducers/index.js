import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import projects from './projectReducer';
import illustrations from './illustrationReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
	projects,
	illustrations,
  ajaxCallsInProgress
});

export default rootReducer;
