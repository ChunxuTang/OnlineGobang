/**
 * Created by Chunxu on 2017/2/24.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
// import {Row, Col, Panel} from 'react-bootstrap';
import Board from './Board';
import { addPiece } from '../actions/index';

class MultiBoard extends Board {
  constructor(props) {
    console.log(props);
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.startGame();

  }

  handleClick(e) {
    e.preventDefault();
    this.props.addPiece(1, 1);
    this.drawPiece(1, 1, true);
    console.log('trigger addPiece');
  }

  render() {
    console.log('call multi board.js');
    console.log(this.props.game);
    if (this.props.game.piece) {
      this.drawPiece(this.props.game.piece.x, this.props.game.piece.y, true);
    }
    return (
      <Board onClick={ this.handleClick }/>
    );
  }

}

function mapStateToProps(state) {
  return {
    game: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPiece
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiBoard);
