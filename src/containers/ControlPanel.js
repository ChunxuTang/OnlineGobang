/**
 * Created by Chunxu on 2017/2/21.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {createRoom, joinRoom, selectSide} from '../actions/index';


class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: ''
    };

    this.handleCreateRoom = this.handleCreateRoom.bind(this);
    //this.handleJoinRoom = this.handleJoinRoom.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleCreateRoom() {
    console.log('create room');
    this.props.createRoom();
    this.props.selectSide('Black');
  }

  handleJoinRoom() {
    if (this.state.room.length < 1) {
      return;
    }
    this.props.joinRoom(this.state.room);
    this.props.selectSide('White');
    console.log(this.state.room);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleJoinRoom();
  }

  handleInputChange(e) {
    this.setState({
      room: e.target.value
    });
  }

  render() {
    console.log(this.props.mode);

    if (this.props.mode === 'single') {
      return <div></div>;
    }

    const colStyle = {
      marginBottom: '1em'
    };
    const inputStyle = {
      marginLeft: '1em'
    };

    return (
      <div>
        <Row>
          <Col sm={6} md={4} style={colStyle}>
            <Button bsStyle="primary" onClick={this.handleCreateRoom}>Create Game</Button>
          </Col>
          <Col sm={6} md={8} style={colStyle}>
            <p className="text-right">{this.props.game.room}</p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} style={colStyle}>
            <Form onSubmit={this.handleSubmit} inline>
              <Button bsStyle="primary" type="submit">Join Game</Button>
              {/*<FormGroup controlId="roomId">*/}
              {/*<FormControl type="text" value={this.state.room} placeholder="Enter room id" style={inputStyle}/>*/}
              {/*</FormGroup>*/}
              <input value={this.state.room} onChange={this.handleInputChange} className="form-control"
                     placeholder="Enter room id" style={inputStyle}/>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('mapState', state);
  return {
    mode: state.mode,
    game: state.game
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createRoom,
    joinRoom,
    selectSide
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
