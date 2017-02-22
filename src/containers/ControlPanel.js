/**
 * Created by Chunxu on 2017/2/21.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class ControlPanel extends Component {
  render() {
    console.log(this.props.mode);

    if (this.props.mode === 'single') {
      return <div></div>;
    }

    return (
      <div className="row">
          <div className="row">
            <Button bsStyle="primary">Create Game</Button>
          </div>
          <div className="row">
            <Button bsStyle="primary">Join Game</Button>
          </div>
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
