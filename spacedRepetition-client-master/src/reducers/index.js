import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './auth';
import protectedDataReducer from './protected-data';
import questionsReducer from './questions';
import answersReducer from './answers';
import nextReducer from './next';

const rootReducer = combineReducers({
	form: formReducer,
	auth: authReducer,
	protectedData: protectedDataReducer,
	questions: questionsReducer,
	answers: answersReducer,
	next: nextReducer,
});

export default rootReducer;
