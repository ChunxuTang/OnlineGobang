/**
 * Created by Chunxu on 2017/2/26.
 */

import * as types from '../constants/ActionTypes';

const color = (state = [], action) => {
  console.log('color', action);
  switch (action.type) {
    case types.SELECT_SIDE:
      return action.color;
    default:
      return state;
  }
};

export default color;
