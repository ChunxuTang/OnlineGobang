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

export const createRoom = () => ({
  type: types.SERVER_CREATE_ROOM
});

export const joinRoom = (room) => ({
  type: types.SERVER_JOIN_ROOM,
  room
});

export const selectSide = (color) => ({
  type: types.SELECT_SIDE,
  color
});

export const addPiece = (x, y) => ({
  type: types.SERVER_ADD_PIECE,
  x,
  y
});
