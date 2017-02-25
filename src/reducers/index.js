/**
 * Created by Chunxu on 2017/2/21.
 */

import { combineReducers } from 'redux';
import mode from './reducer_mode';
import side from './reducer_side';
import game from './reducer_game';

const rootReducer = combineReducers({
  mode,
  side,
  game
});

export default rootReducer;
