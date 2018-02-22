import { API_BASE_URL } from '../config';

export const FETCH_ANSWER_REQUEST = 'FETCH_ANSWER_REQUEST';
const fetchAnswerRequest = () => ({
	type: FETCH_ANSWER_REQUEST,
});

export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';

const fetchAnswerSuccess = answer => ({
	type: FETCH_ANSWER_SUCCESS,
	answer,
});

export const FETCH_ANSWER_ERROR = 'FETCH_ANSWER_ERROR';
const fetchAnswerError = error => ({
	type: FETCH_ANSWER_ERROR,
	error,
});

export const FETCH_NEXT_REQUEST = 'FETCH_NEXT_REQUEST';
const fetchNextRequest = () => ({
	type: FETCH_NEXT_REQUEST,
});

export const FETCH_NEXT_SUCCESS = 'FETCH_NEXT_SUCCESS';

const fetchNextSuccess = next => ({
	type: FETCH_NEXT_SUCCESS,
	next,
});

export const FETCH_NEXT_ERROR = 'FETCH_NEXT_ERROR';
const fetchNextError = error => ({
	type: FETCH_NEXT_ERROR,
	error,
});

export const FETCH_SCORE_SUCCESS = 'FETCH_SCORE_SUCCESS';
export const fetchScoreSuccess = score => ({
	type: FETCH_SCORE_SUCCESS,
	score,
});

export const WRONG_ANSWER_ACTION = 'WRONG_ANSWER_ACTION';
export const wrongScoreAction = score => ({
	type: WRONG_ANSWER_ACTION,
	score,
});

export const fetchAnswer = boolean => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchAnswerRequest());
	//console.log('fetch answer working')
	fetch(`${API_BASE_URL}/questions/answer`, {
		method: 'POST',
		body: JSON.stringify({ boolean }),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${authToken}`,
		},
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(answer => dispatch(fetchAnswerSuccess(answer)))
		.then(() => dispatch(fetchNext()))
		.catch(error => dispatch(fetchAnswerError(error)));
};

export const fetchNext = () => (dispatch, getState) => {
	const authToken = getState().auth.authToken;
	dispatch(fetchNextRequest());
	//console.log('fetch Next working')
	fetch(`${API_BASE_URL}/questions/next`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${authToken}`,
		},
	})
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(answer => dispatch(fetchNextSuccess(answer)))
		.catch(error => dispatch(fetchNextError(error)));
};
