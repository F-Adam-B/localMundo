import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR
} from '../actions/questions';

const initialState = {
  data: [],
  loading: false,
  error: null
};

//------------Questions REDUCER-----------------------------------------------------------------

export default (state = initialState, action) => {
  if (action.type === FETCH_QUESTION_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === FETCH_QUESTION_SUCCESS) {
    //console.log('Fetch Questions Success Reducer', action);
    return Object.assign({}, state, {
      data: action,
      loading: false,
      error: null
    });
  } else if (action.type === FETCH_QUESTION_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
    });
  }
  return state;
};
