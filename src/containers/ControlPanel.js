/**
 * Created by Chunxu on 2017/2/21.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row, Col, Button, Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

class ControlPanel extends Component {
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
          <Col sm={12} md={12} style={colStyle}>
            <Button bsStyle="primary">Create Game</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12} style={colStyle}>
            <Form inline>
              <Button bsStyle="primary">Join Game</Button>
              <FormGroup controlId="roomId">
                <FormControl type="text" placeholder="Enter room id" style={inputStyle}/>
              </FormGroup>
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
    mode: state.mode
  };
}

export default connect(mapStateToProps)(ControlPanel);
