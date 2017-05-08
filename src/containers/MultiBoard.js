import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Board from './Board';
import {addPiece, sideWon} from '../actions/index';
import {CELL_WIDTH} from '../constants/Grid';

class MultiBoard extends Board {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.startGame();
  }

  otherSideColor() {
    if (!this.props.color) {
      return '';
    } else if (this.props.color === 'White') {
      return 'Black';
    } else {
      return 'White';
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (this.gameOver || !this.myTurn || !this.props.color) {
      return;
    }

    let i = Math.floor(e.nativeEvent.offsetX / CELL_WIDTH);
    let j = Math.floor(e.nativeEvent.offsetY / CELL_WIDTH);

    if (this.chessBoard[i][j] === 0) {
      this.props.addPiece(i, j);
      console.log('color', this.props.color);
      this.drawPiece(i, j, this.props.color === 'Black');
      this.chessBoard[i][j] = 1;
      for (let k = 0; k < this.count; k++) {
        if (this.wins[i][j][k]) {
          this.myWin[k]++;
          this.otherWin[k] = 6;
          if (this.myWin[k] === 5) {
            this.props.sideWon(this.props.color, true);
            this.gameOver = true;
          }
        }
      }

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
      this.drawPiece(x, y, this.props.color === 'White');
      this.chessBoard[x][y] = 2;
      for (let k = 0; k < this.count; k++) {
        if (this.wins[x][y][k]) {
          this.otherWin[k]++;
          this.myWin[k] = 6;
          if (this.otherWin[k] === 5) {
            this.props.sideWon(this.otherSideColor(), false);
            this.gameOver = true;
          }
        }
      }
      if (!this.gameOver) {
        this.myTurn = true;
      }

      console.log('my turn ', this.myTurn);
    }
    return (
      <Board onClick={ this.handleClick }/>
    );
  }

}

function mapStateToProps(state) {
  return {
    game: state.game,
    color: state.color
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    addPiece,
    sideWon
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiBoard);
