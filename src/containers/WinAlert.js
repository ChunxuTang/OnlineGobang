import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert} from 'react-bootstrap';

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

  utter() {
    if ('speechSynthesis' in window) {
      let msg = new SpeechSynthesisUtterance(`${this.props.side.color} side won!`);
      window.speechSynthesis.speak(msg);
    }
  }

  render() {
    let side = this.props.side;
    if (!side.color) {
      return <div/>;
    }
    let alertStyle;
    if (side.me) {
      alertStyle = "success";
    } else {
      alertStyle = 'warning';
    }

    this.utter();
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
