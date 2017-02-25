/**
 * Created by Chunxu on 2017/2/24.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Row, Col, Panel} from 'react-bootstrap';
import Board from './Board';

class MultiBoard extends Board {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.startGame();
  }

  handleClick(e) {

  }

}