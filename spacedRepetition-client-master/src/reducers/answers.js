import {
	FETCH_ANSWER_REQUEST,
	FETCH_ANSWER_SUCCESS,
	FETCH_ANSWER_ERROR,
	FETCH_SCORE_SUCCESS,
	WRONG_ANSWER_ACTION,
} from '../actions/answers';

const initialState = {
	data: [],
	loading: false,
	error: null,
	score: 0,
	toggleFeedback: null,
};

//---------------Answer REDUCER-----------------------------------------------------------------

export default (state = initialState, action) => {
	if (action.type === FETCH_ANSWER_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null,
		});
	} else if (action.type === FETCH_ANSWER_SUCCESS) {
		//console.log('Fetch Answer Success Reducer', action.answer.questions.answer);
		return Object.assign({}, state, {
			data: action,
			loading: false,
			error: null,
		});
	} else if (action.type === FETCH_ANSWER_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false,
		});
	} else if (action.type === FETCH_SCORE_SUCCESS) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			score: (action.score += 1),
			toggleFeedback: true,
		});
	} else if (action.type === WRONG_ANSWER_ACTION) {
		return Object.assign({}, state, {
			loading: false,
			error: null,
			score: (action.score -= 1),
			toggleFeedback: false,
		});
	}
	return state;
};
