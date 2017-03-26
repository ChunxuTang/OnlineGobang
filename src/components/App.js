import React, {Component} from 'react';

import Nav from './Nav';
import ControlPanel from '../containers/ControlPanel';
// import Board from '../containers/Board';
import BoardPanel from '../containers/BoardPanel';
import ModeSelector from '../containers/ModeSelector';

export default class App extends Component {
  render() {
    return (
      <div>
        <ModeSelector/>
        <Nav/>
        <div className="container">
          <ControlPanel/>
          <BoardPanel/>
        </div>
      </div>
    );
  }
}
