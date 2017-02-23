/**
 * Created by Chunxu on 2017/2/21.
 */

import React, {Component} from 'react';

import Nav from './Nav';
import ControlPanel from '../containers/ControlPanel';
import Board from '../containers/Board';
import ModeSelector from '../containers/ModeSelector';

export default class App extends Component {
  render() {
    return (
      <div>
        <ModeSelector/>
        <Nav/>
        <div className="container">
          <ControlPanel/>
          <Board/>
        </div>
      </div>
    );
  }
}
