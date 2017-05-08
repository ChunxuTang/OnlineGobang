import * as types from '../constants/ActionTypes';

const side = (state = [], action) => {
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
