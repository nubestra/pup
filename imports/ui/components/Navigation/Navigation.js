import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Navigation.scss';

const Navigation = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img alt="logo aldeco" src="/logo.png" /></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">NOSOTROS</NavItem>
        <NavItem eventKey={2} href="#">CONTACTO</NavItem>
        <NavItem eventKey={3} href="#">PRODUCTOS</NavItem>
        <NavItem eventKey={4} href="/">SIMULADOR</NavItem>
        <NavItem eventKey={5} href="#">GALERÍA</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Navigation.defaultProps = {
  name: '',
};

export default Navigation;
