/**
 * Created by Chunxu on 2017/2/24.
 */

import * as types from '../constants/ActionTypes';

const side = (state=[], action) => {
  console.log('side', action);
  switch (action.type) {
    case types.SIDE_WON:
      return {
        color: action.color,
        me: action.me
      };
    default:
      return state;
  }
};

export default side;
