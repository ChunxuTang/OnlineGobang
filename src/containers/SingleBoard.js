import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Board from './Board';
import {sideWon} from '../actions/index';

class SingleBoard extends Board {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.startGame();
  }

  computerAI() {
    let myScore = [];
    let computerScore = [];
    let max = 0;
    let u = 0, v = 0;
    for (let i = 0; i < 15; i++) {
      myScore[i] = [];
      computerScore[i] = [];
      for (let j = 0; j < 15; j++) {
        myScore[i][j] = 0;
        computerScore[i][j] = 0;
      }
    }
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 15; j++) {
        if (this.chessBoard[i][j] === 0) {
          for (let k = 0; k < this.count; k++) {
            if (this.wins[i][j][k]) {
              if (this.myWin[k] === 1) {
                myScore[i][j] += 200;
              } else if (this.myWin[k] === 2) {
                myScore[i][j] += 400;
              } else if (this.myWin[k] === 3) {
                myScore[i][j] += 2000;
              } else if (this.myWin[k] === 4) {
                myScore[i][j] += 10000;
              }
              if (this.otherWin[k] === 1) {
                computerScore[i][j] += 220;
              } else if (this.otherWin[k] === 2) {
                computerScore[i][j] += 420;
              } else if (this.otherWin[k] === 3) {
                computerScore[i][j] += 2100;
              } else if (this.otherWin[k] === 4) {
                computerScore[i][j] += 20000;
              }
            }
          }

          if (myScore[i][j] > max) {
            max = myScore[i][j];
            u = i;
            v = j;
          } else if (myScore[i][j] === max) {
            if (computerScore[i][j] > computerScore[u][v]) {
              u = i;
              v = j;
            }
          }
          if (computerScore[i][j] > max) {
            max = computerScore[i][j];
            u = i;
            v = j;
          } else if (computerScore[i][j] === max) {
            if (myScore[i][j] > myScore[u][v]) {
              u = i;
              v = j;
            }
          }
        }
      }
    }

    this.drawPiece(u, v, false);
    this.chessBoard[u][v] = 2;
    for (let k = 0; k < this.count; k++) {
      if (this.wins[u][v][k]) {
        this.otherWin[k]++;
        this.myWin[k] = 6;
        if (this.otherWin[k] === 5) {
          //window.alert('Computer wins');
          this.props.sideWon('White', false);
          this.gameOver = true;
        }
      }
    }
    if (!this.gameOver) {
      this.myTurn = !this.myTurn;
    }
  }

  handleClick(e) {
    e.preventDefault();
    if (this.gameOver || !this.myTurn) {
      return;
    }
    console.log(e.nativeEvent.offsetX);
    let i = Math.floor(e.nativeEvent.offsetX / 30);
    let j = Math.floor(e.nativeEvent.offsetY / 30);

    if (this.chessBoard[i][j] === 0) {
      this.drawPiece(i, j, true);
      this.chessBoard[i][j] = 1;
      for (let k = 0; k < this.count; k++) {
        if (this.wins[i][j][k]) {
          this.myWin[k]++;
          this.otherWin[k] = 6;
          if (this.myWin[k] === 5) {
            //window.alert("You win!");
            this.props.sideWon('Black', true);
            this.gameOver = true;
          }
        }
      }

      if (!this.gameOver) {
        this.myTurn = !this.myTurn;
        this.computerAI();
      }
    }
  }

  render() {
    console.log('call single board.js');
    return (
      <Board onClick={ this.handleClick }/>
    );
  }
}

function mapStateToProps(state) {
  return {
    mode: state.mode
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    sideWon
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBoard);
