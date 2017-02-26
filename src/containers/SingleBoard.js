/**
 * Created by Chunxu on 2017/2/23.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Board from './Board';
import { sideWon } from '../actions/index';

class SingleBoard extends Board {
  constructor(props) {
    super(props);

    //this.canvas = null;
    // this.ctx = null;
    // this.chessBoard = [];

    // this.gameOver = false;
    // this.myTurn = true;
    // this.wins = [];
    this.myWin = [];
    this.computerWin = [];
    // this.count = 0;

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.startGame();
    this.initWinArrays();
  }

  initWinArrays() {
    for (let i = 0; i < this.count; i++) {
      this.myWin[i] = 0;
      this.computerWin[i] = 0;
    }
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
              if (this.myWin[k] == 1) {
                myScore[i][j] += 200;
              } else if (this.myWin[k] == 2) {
                myScore[i][j] += 400;
              } else if (this.myWin[k] == 3) {
                myScore[i][j] += 2000;
              } else if (this.myWin[k] == 4) {
                myScore[i][j] += 10000;
              }
              if (this.computerWin[k] == 1) {
                computerScore[i][j] += 220;
              } else if (this.computerWin[k] == 2) {
                computerScore[i][j] += 420;
              } else if (this.computerWin[k] == 3) {
                computerScore[i][j] += 2100;
              } else if (this.computerWin[k] == 4) {
                computerScore[i][j] += 20000;
              }
            }
          }

          if (myScore[i][j] > max) {
            max = myScore[i][j];
            u = i;
            v = j;
          } else if (myScore[i][j] == max) {
            if (computerScore[i][j] > computerScore[u][v]) {
              u = i;
              v = j;
            }
          }
          if (computerScore[i][j] > max) {
            max = computerScore[i][j];
            u = i;
            v = j;
          } else if (computerScore[i][j] == max) {
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
        this.computerWin[k]++;
        this.myWin[k] = 6;
        if (this.computerWin[k] === 5) {
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
          this.computerWin[k] = 6;
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
