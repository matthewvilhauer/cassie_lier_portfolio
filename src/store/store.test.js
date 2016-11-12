import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', function() {
	it('Should handle creating courses', function() {
		//arrange
		const store = createStore(rootReducer, initialState);
		const course = {
			title: "Clean Code"
		};

		//act
		const action = courseActions.createCourseSuccess(course);
		store.dispatch(action);

		//assert
		const actual = store.getState().courses[0];
		const expected = {
			title: "Clean Code"
		};
		expect(actual).toEqual(expected);
	});

	it('Should handle updating a course', function() {
				//arrange
		const startingState = [{courses: {
			title: "Clean Code"
		}}]
		const store = createStore(rootReducer, startingState);
		const updatedCourse = {
			title: "Clean Code Updated"
		};

		//act
		const action = courseActions.updateCourseSuccess(updatedCourse);
		store.dispatch(action);

		//assert
		const actual = store.getState().courses[0];
		const expected = {
			title: "Clean Code Updated"
		};
		expect(actual).toEqual(expected);
	})
});
