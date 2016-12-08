import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import projects from './projectReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
	projects,
  ajaxCallsInProgress
});

export default rootReducer;
