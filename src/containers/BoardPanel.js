/**
 * Created by Chunxu on 2017/2/23.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Panel} from 'react-bootstrap';
// import Board from './Board';
import SingleBoard from './SingleBoard';

class BoardPanel extends Component {
  render() {
    console.log('BoardPanel', this.props.mode);

    if (this.props.mode === 'single') {
      return (
        <Row>
          <Col sm={12} md={12}>
            <Panel header="Board" bsStyle="primary">
              <SingleBoard/>
            </Panel>
          </Col>
        </Row>
      );
    } else {
      return (
        <div></div>
      );
    }

  }
}

function mapStateToProps(state) {
  return {
    mode: state.mode
  };
}

export default connect(mapStateToProps)(BoardPanel);