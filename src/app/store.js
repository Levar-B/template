import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loggingMiddleware from 'redux-logger';

import studentReducer from './redux/student/studentReducer';

import campusReducer from './redux/campus/campusReducer';

const rootReducer = combineReducers({
	student: studentReducer,

	campus: campusReducer,
});

function configureStore() {
	return createStore(rootReducer, applyMiddleware(thunk, loggingMiddleware));
}

export default configureStore;
