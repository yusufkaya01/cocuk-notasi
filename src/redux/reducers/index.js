import { combineReducers } from 'redux';

const sampleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SAMPLE_ACTION':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  sample: sampleReducer,
});