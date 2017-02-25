/**
 * Created by Chunxu on 2017/2/23.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Panel} from 'react-bootstrap';
// import Board from './Board';
import SingleBoard from './SingleBoard';
import WinAlert from './WinAlert';

class BoardPanel extends Component {
  render() {
    console.log('BoardPanel', this.props.mode);

    let boardElem;
    if (this.props.mode === 'single') {
      boardElem = <SingleBoard/>;
    } else if (this.props.mode === 'multiple') {
      boardElem = <div></div>;
    } else {
      boardElem = <div></div>;
    }

    return (
      <Row>
        <Col sm={12} md={12}>
          <WinAlert/>
        </Col>
        <Col sm={12} md={12}>
          <Panel header="Board" bsStyle="primary">
            {boardElem}
          </Panel>
        </Col>
      </Row>
    );

  }
}

function mapStateToProps(state) {
  return {
    mode: state.mode
  };
}

export default connect(mapStateToProps)(BoardPanel);