import React, {Component} from 'react';

// http://stackoverflow.com/questions/35677235/how-to-extend-a-react-component

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.canvas = null;
    this.ctx = null;
    this.chessBoard = [];

    this.gameOver = false;
    this.myTurn = true;
    this.wins = [];  // 3D array to store all types of wins
    this.myWin = [];
    this.otherWin = [];
    this.count = 0;  // index used to refer to type of wins
  }

  startGame() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');
    for (let i = 0; i < 15; i++) {
      this.chessBoard[i] = [];
      for (let j = 0; j < 15; j++) {
        this.chessBoard[i][j] = 0;
      }
    }

    this.clearBoard();
    this.drawBoard();

    this.initWins();
    this.initWinArrays();
  }

  initWins() {
    for (let i = 0; i < 15; i++) {
      this.wins[i] = [];
      for (let j = 0; j < 15; j++) {
        this.wins[i][j] = [];
      }
    }
    // all horizontal types of wins
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 11; j++) {
        for (let k = 0; k < 5; k++) {
          this.wins[i][j + k][this.count] = true;
        }
        this.count++;
      }
    }
    // all vertical types of wins
    for (let i = 0; i < 15; i++) {
      for (let j = 0; j < 11; j++) {
        for (let k = 0; k < 5; k++) {
          this.wins[j + k][i][this.count] = true;
        }
        this.count++;
      }
    }
    // all
    //  \
    //   \
    // types of wins
    for (let i = 0; i < 11; i++) {
      for (let j = 0; j < 11; j++) {
        for (let k = 0; k < 5; k++) {
          this.wins[i + k][j + k][this.count] = true;
        }
        this.count++;
      }
    }
    // all
    //    /
    //  /
    // types of wins
    for (let i = 0; i < 11; i++) {
      for (let j = 14; j > 3; j--) {
        for (let k = 0; k < 5; k++) {
          this.wins[i + k][j - k][this.count] = true;
        }
        this.count++;
      }
    }
  }

  initWinArrays() {
    for (let i = 0; i < this.count; i++) {
      this.myWin[i] = 0;
      this.otherWin[i] = 0;
    }
  }

  drawBoard() {
    for (let i = 0; i < 15; i++) {
      this.ctx.strokeStyle = '#424242';
      this.ctx.beginPath();
      this.ctx.moveTo(15 + i * 30, 15);
      this.ctx.lineTo(15 + i * 30, this.canvas.height - 15);
      this.ctx.closePath();
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(15, 15 + i * 30);
      this.ctx.lineTo(this.canvas.width - 15, 15 + i * 30);
      this.ctx.closePath();
      this.ctx.stroke();
    }
  }

  clearBoard() {
    this.ctx.fillStyle = "#cd8500";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawPiece(x, y, isBlack) {
    this.ctx.beginPath();
    this.ctx.arc(15 + x * 30, 15 + y * 30, 13, 0, 2 * Math.PI);
    this.ctx.closePath();

    let gradient = this.ctx.createRadialGradient(15 + x * 30 + 2, 15 + y * 30 - 2, 13,
        15 + x * 30 + 2, 15 + y * 30 - 2, 0);
    if (isBlack) {
      gradient.addColorStop(0, "#0A0A0A");
      gradient.addColorStop(1, "#616161");
    } else {
      gradient.addColorStop(0, "#d1d1d1");
      gradient.addColorStop(1, "#f9f9f9");
    }

    this.ctx.fillStyle = gradient;
    this.ctx.fill();
  }

  render() {
    console.log('call board.js');
    return (
        <canvas id="board" {...this.props} className="center-block" width="450px"
                height="450px;"/>
    );
  }
}
