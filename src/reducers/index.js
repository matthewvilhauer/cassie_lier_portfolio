import {combineReducers} from 'redux';
import projects from './projectReducer';
import illustrations from './illustrationReducer';
import posters from './posterReducer';
import models from './modelReducer';

const rootReducer = combineReducers({
	projects,
	illustrations,
	posters,
	models
});

export default rootReducer;
