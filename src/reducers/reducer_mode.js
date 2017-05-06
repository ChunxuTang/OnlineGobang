import * as types from '../constants/ActionTypes'

const mode = (state = [], action) => {
  console.log('reducer: ', action);
  switch (action.type) {
    case types.START_SINGLE_MODE:
      return 'single';
    case types.START_MULTI_MODE:
      return 'multiple';
    default:
      return state;
  }
};

export default mode;
