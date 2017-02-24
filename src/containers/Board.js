/**
 * Created by Chunxu on 2017/2/21.
 */

import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {Row, Col, Panel} from 'react-bootstrap';

// http://stackoverflow.com/questions/35677235/how-to-extend-a-react-component

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.canvas = null;
    // this.ctx = null;
    // this.chessBoard = [];
    //
    // this.gameOver = false;
    // this.myTurn = true;
    // this.wins = [];
    // this.myWin = [];
    // this.computerWin = [];
    // this.count = 0;
    //
    //
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    console.log('call board.js');
    return (
      <canvas id="board" {...this.props} className="center-block" width="450px"
              height="450px;"/>
    );
  }

  // componentDidMount() {
  //   this.canvas = document.querySelector('canvas');
  //   this.ctx = this.canvas.getContext('2d');
  //
  //   this.startGame();
  // }
  //
  // startGame() {
  //   for (let i = 0; i < 15; i++) {
  //     this.chessBoard[i] = [];
  //     for (let j = 0; j < 15; j++) {
  //       this.chessBoard[i][j] = 0;
  //     }
  //   }
  //
  //   this.clearBoard();
  //   this.drawBoard();
  //
  //   for (let i = 0; i < 15; i++) {
  //     this.wins[i] = [];
  //     for (let j = 0; j < 15; j++) {
  //       this.wins[i][j] = [];
  //     }
  //   }
  //   for (let i = 0; i < 15; i++) {
  //     for (let j = 0; j < 11; j++) {
  //       for (let k = 0; k < 5; k++) {
  //         this.wins[i][j + k][this.count] = true;
  //       }
  //       this.count++;
  //     }
  //   }
  //   for (let i = 0; i < 15; i++) {
  //     for (let j = 0; j < 11; j++) {
  //       for (let k = 0; k < 5; k++) {
  //         this.wins[j + k][i][this.count] = true;
  //       }
  //       this.count++;
  //     }
  //   }
  //   for (let i = 0; i < 11; i++) {
  //     for (let j = 0; j < 11; j++) {
  //       for (let k = 0; k < 5; k++) {
  //         this.wins[i + k][j + k][this.count] = true;
  //       }
  //       this.count++;
  //     }
  //   }
  //   for (let i = 0; i < 11; i++) {
  //     for (let j = 14; j > 3; j--) {
  //       for (let k = 0; k < 5; k++) {
  //         this.wins[i + k][j - k][this.count] = true;
  //       }
  //       this.count++;
  //     }
  //   }
  //   for (let i = 0; i < this.count; i++) {
  //     this.myWin[i] = 0;
  //     this.computerWin[i] = 0;
  //   }
  //
  // }
  //
  // drawBoard() {
  //   for (let i = 0; i < 15; i++) {
  //     this.ctx.strokeStyle = '#BFBFBF';
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(15 + i * 30, 15);
  //     this.ctx.lineTo(15 + i * 30, this.canvas.height - 15);
  //     this.ctx.closePath();
  //     this.ctx.stroke();
  //     this.ctx.beginPath();
  //     this.ctx.moveTo(15, 15 + i * 30);
  //     this.ctx.lineTo(this.canvas.width - 15, 15 + i * 30);
  //     this.ctx.closePath();
  //     this.ctx.stroke();
  //   }
  // }
  //
  // clearBoard() {
  //   this.ctx.fillStyle = "#FFFFFF";
  //   this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  // }
  //
  // computerAI() {
  //   let myScore = [];
  //   let computerScore = [];
  //   let max = 0;
  //   let u = 0, v = 0;
  //   for (let i = 0; i < 15; i++) {
  //     myScore[i] = [];
  //     computerScore[i] = [];
  //     for (let j = 0; j < 15; j++) {
  //       myScore[i][j] = 0;
  //       computerScore[i][j] = 0;
  //     }
  //   }
  //   for (let i = 0; i < 15; i++) {
  //     for (let j = 0; j < 15; j++) {
  //       if (this.chessBoard[i][j] === 0) {
  //         for (let k = 0; k < this.count; k++) {
  //           if (this.wins[i][j][k]) {
  //             if (this.myWin[k] == 1) {
  //               myScore[i][j] += 200;
  //             } else if (this.myWin[k] == 2) {
  //               myScore[i][j] += 400;
  //             } else if (this.myWin[k] == 3) {
  //               myScore[i][j] += 2000;
  //             } else if (this.myWin[k] == 4) {
  //               myScore[i][j] += 10000;
  //             }
  //             if (this.computerWin[k] == 1) {
  //               computerScore[i][j] += 220;
  //             } else if (this.computerWin[k] == 2) {
  //               computerScore[i][j] += 420;
  //             } else if (this.computerWin[k] == 3) {
  //               computerScore[i][j] += 2100;
  //             } else if (this.computerWin[k] == 4) {
  //               computerScore[i][j] += 20000;
  //             }
  //           }
  //         }
  //
  //         if (myScore[i][j] > max) {
  //           max = myScore[i][j];
  //           u = i;
  //           v = j;
  //         } else if (myScore[i][j] == max) {
  //           if (computerScore[i][j] > computerScore[u][v]) {
  //             u = i;
  //             v = j;
  //           }
  //         }
  //         if (computerScore[i][j] > max) {
  //           max = computerScore[i][j];
  //           u = i;
  //           v = j;
  //         } else if (computerScore[i][j] == max) {
  //           if (myScore[i][j] > myScore[u][v]) {
  //             u = i;
  //             v = j;
  //           }
  //         }
  //       }
  //     }
  //   }
  //
  //   this.drawPiece(u, v, false);
  //   this.chessBoard[u][v] = 2;
  //   for (let k = 0; k < this.count; k++) {
  //     if (this.wins[u][v][k]) {
  //       this.computerWin[k]++;
  //       this.myWin[k] = 6;
  //       if (this.computerWin[k] === 5) {
  //         window.alert('Computer wins');
  //         this.gameOver = true;
  //       }
  //     }
  //   }
  //   if (!this.gameOver) {
  //     this.myTurn = !this.myTurn;
  //   }
  // }
  //
  // drawPiece(x, y, me) {
  //   this.ctx.beginPath();
  //   this.ctx.arc(15 + x * 30, 15 + y * 30, 13, 0, 2 * Math.PI);
  //   this.ctx.closePath();
  //
  //   let gradient = this.ctx.createRadialGradient(15 + x * 30 + 2, 15 + y * 30 - 2, 13, 15 + x * 30 + 2, 15 + y * 30 - 2, 0);
  //   if (me) {
  //     gradient.addColorStop(0, "#0A0A0A");
  //     gradient.addColorStop(1, "#636766");
  //   } else {
  //     gradient.addColorStop(0, "#d1d1d1");
  //     gradient.addColorStop(1, "#f9f9f9");
  //   }
  //
  //   this.ctx.fillStyle = gradient;
  //   this.ctx.fill();
  // }
  //
  // handleClick(e) {
  //   if (this.gameOver || !this.myTurn) {
  //     return;
  //   }
  //   console.log(e.nativeEvent.offsetX);
  //   let i = Math.floor(e.nativeEvent.offsetX / 30);
  //   let j = Math.floor(e.nativeEvent.offsetY / 30);
  //
  //   if (this.chessBoard[i][j] === 0) {
  //     this.drawPiece(i, j, true);
  //     this.chessBoard[i][j] = 1;
  //     for (let k = 0; k < this.count; k++) {
  //       if (this.wins[i][j][k]) {
  //         this.myWin[k]++;
  //         this.computerWin[k] = 6;
  //         if (this.myWin[k] === 5) {
  //           window.alert("You win!");
  //           this.gameOver = true;
  //         }
  //       }
  //     }
  //
  //     if (!this.gameOver) {
  //       this.myTurn = !this.myTurn;
  //       this.computerAI();
  //     }
  //   }
  // }
  //
  // registerSingleMode() {
  //   console.log('single board');
  // }
  //
  // registerMultiMode() {
  //   console.log('multi board');
  // }

  // render() {
  //   console.log('Board', this.props.mode);
  //
  //   if (this.props.mode === 'single') {
  //     this.registerSingleMode();
  //   } else if (this.props.mode === 'multiple') {
  //     this.registerMultiMode();
  //   }
  //
  //   return (
  //     <canvas id="board" onClick={ this.handleClick } className="center-block" width="450px"
  //             height="450px;"></canvas>
  //
  //   );
  // }
}
//
// function mapStateToProps(state) {
//   return {
//     mode: state.mode
//   };
// }
//
// export default connect(mapStateToProps)(SingleBoard);
