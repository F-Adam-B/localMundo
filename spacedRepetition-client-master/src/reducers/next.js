import { FETCH_NEXT_REQUEST, FETCH_NEXT_SUCCESS, FETCH_NEXT_ERROR } from '../actions/answers';

const initialState = {
	data: [],
	loading: false,
	error: null,
};

//---------Next REDUCER-----------------------------------------------------------------

export default (state = initialState, action) => {
	if (action.type === FETCH_NEXT_REQUEST) {
		return Object.assign({}, state, {
			loading: true,
			error: null,
		});
	} else if (action.type === FETCH_NEXT_SUCCESS) {
		//console.log('Fetch Next Success Reducer', action.next.question);
		return Object.assign({}, state, {
			data: action.next,
			loading: false,
			error: null,
		});
	} else if (action.type === FETCH_NEXT_ERROR) {
		return Object.assign({}, state, {
			error: action.error,
			loading: false,
		});
	}
	return state;
};
