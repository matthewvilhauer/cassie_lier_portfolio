import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import projects from './projectReducer';
import illustrations from './illustrationReducer';
import posters from './posterReducer';
import threeD_projects from './threeDReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
	projects,
	illustrations,
	posters,
	threeD_projects,
  ajaxCallsInProgress
});

export default rootReducer;
