/**
 * Created by Chunxu on 2017/2/21.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Panel} from 'react-bootstrap';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.canvas = null;
    this.ctx = null;
    this.chessBoard = [];

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.canvas = document.querySelector('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.startGame();
  }

  startGame() {
    for (let i = 0; i < 15; i++) {
      this.chessBoard[i] = [];
      for (let j = 0; j < 15; j++) {
        this.chessBoard[i][j] = 0;
      }
    }

    this.clearBoard();
    this.drawBoard();
  }

  drawBoard() {
    for (let i = 0; i < 15; i++) {
      this.ctx.strokeStyle = '#BFBFBF';
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
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawPiece(x, y) {
    this.ctx.beginPath();
    this.ctx.arc(15 + x * 30, 15 + y * 30, 13, 0, 2 * Math.PI);
    this.ctx.closePath();

    // console.log(x);
    // console.log(y);

    let gradient = this.ctx.createRadialGradient(15 + x * 30 + 2, 15 + y * 30 - 2, 13, 15 + x * 30 + 2, 15 + y * 30 - 2, 0);
    gradient.addColorStop(0, "#0A0A0A");
    gradient.addColorStop(1, "#636766");

    this.ctx.fillStyle = gradient;
    this.ctx.fill();
  }

  handleClick(e) {
    console.log(e.nativeEvent.offsetX);
    let x = Math.floor(e.nativeEvent.offsetX / 30);
    let y = Math.floor(e.nativeEvent.offsetY / 30);
    this.drawPiece(x, y);
  }

  render() {
    return (
      <Row>
        <Col sm={12} md={12}>
          <Panel header="Board" bsStyle="primary">
            <canvas id="board" onClick={ this.handleClick } className="center-block" width="450px"
                    height="450px;"></canvas>
          </Panel>
        </Col>
      </Row>
    );
  }
}
