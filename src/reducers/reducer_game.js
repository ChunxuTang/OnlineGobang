/**
 * Created by Chunxu on 2017/2/25.
 */

import * as types from '../constants/ActionTypes';

const game = (state = {}, action) => {
  console.log('socketio', action);
  switch (action.type) {
    case types.ADD_PIECE:
      return Object.assign({}, {
        piece: {
          x: action.x,
          y: action.y
        }
      });
    default:
      return state;
  }
};

export default game;
