import * as types from '../constants/ActionTypes';

const game = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_PIECE:
      return Object.assign({}, {
        piece: {
          x: action.x,
          y: action.y
        }
      });
    case types.CREATE_ROOM:
    case types.JOIN_ROOM:
      return Object.assign({}, {
        room: action.room
      });
    default:
      return state;
  }
};

export default game;
