import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md" style={{background: "#ffc108"}}>
          <div className="container">
          <NavbarBrand>
            <i className="far fa-building"></i>
            <span> properties</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>              
              <NavItem>
                <NavLink href="https://github.com/surfer19/react-properties" target="_blank"><strong>GitHub</strong></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>        
      </div>
    );
  }
}