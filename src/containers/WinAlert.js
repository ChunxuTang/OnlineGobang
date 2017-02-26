/**
 * Created by Chunxu on 2017/2/24.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

class WinAlert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertVisible: true
    };

    //this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  handleAlertDismiss() {
    this.setState({
      alertVisible: false
    });
  }

  handleAlertShow() {
    this.setState({
      alertVisible: true
    });
  }

  render() {
    console.log('WinAlert', this.props.side);

    let side = this.props.side;
    if (!side.color) {
      return <div></div>;
    }
    let alertStyle;
    if (side.me) {
      alertStyle = "success";
    } else {
      alertStyle = 'warning';
    }

    return (
      <Alert bsStyle={alertStyle}>
        <h4>{side.color} side won!</h4>
      </Alert>
    );

  }
}

function mapStateToProps(state) {
  return {
    side: state.side
  };
}

export default connect(mapStateToProps)(WinAlert);
