/**
 * Created by Chunxu on 2017/2/21.
 */

import * as types from '../constants/ActionTypes';

export const selectSinglePlayerMode = () => ({
  type: types.START_SINGLE_MODE
});

export const selectMultiPlayerMode = () => ({
  type: types.START_MULTI_MODE
});

export const sideWon = (color, me) => ({
  type: types.SIDE_WON,
  color,
  me
});

export const addPiece = (x, y) => ({
  type: types.SERVER_ADD_PIECE,
  x,
  y
});
