/**
 * Created by Chunxu on 2017/2/24.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
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
    if (this.gameOver || !this.myTurn) {
      return;
    }

    let i = Math.floor(e.nativeEvent.offsetX / 30);
    let j = Math.floor(e.nativeEvent.offsetY / 30);

    if (this.chessBoard[i][j] === 0) {
      this.props.addPiece(i, j);
      this.drawPiece(i, j, true);
      this.chessBoard[i][j] = 1;


      if (!this.gameOver) {
        this.myTurn = false;
      }
    }
  }

  render() {
    console.log('call multi board.js');
    console.log(this.props.game);
    if (this.props.game.piece) {
      let x = this.props.game.piece.x;
      let y = this.props.game.piece.y;
      this.drawPiece(x, y, true);
      this.chessBoard[x][y] = 1;
      this.myTurn = true;
      console.log('my turn ', this.myTurn);
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
