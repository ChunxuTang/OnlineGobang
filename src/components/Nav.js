/**
 * Created by Chunxu on 2017/2/22.
 */

import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

class Nav extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Online Gobang</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Nav;
