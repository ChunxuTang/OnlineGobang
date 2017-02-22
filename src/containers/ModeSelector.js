/**
 * Created by Chunxu on 2017/2/21.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Button, Modal } from 'react-bootstrap';
import { selectSinglePlayerMode, selectMultiPlayerMode } from '../actions/index';


class ModeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };

    this.singleMode = this.singleMode.bind(this);
    this.multiMode = this.multiMode.bind(this);
  }

  close() {
    this.setState({
      showModal: false
    });
  }

  singleMode() {
    this.props.selectSinglePlayerMode();
    this.close();
  }

  multiMode() {
    this.props.selectMultiPlayerMode();
    this.close();
  }

  render() {
    return (
      <Modal show={this.state.showModal} bsSize="small">
        <Modal.Header>
          <Modal.Title>Online Gobang</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={12}>
              <Button bsStyle="primary" bsSize="large" onClick={ this.singleMode } block>Single Player</Button>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col sm={12} md={12} className="text-center">
              <Button bsStyle="primary" bsSize="large" onClick={ this.multiMode } block>Multiple Player</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectSinglePlayerMode,
    selectMultiPlayerMode
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ModeSelector);
