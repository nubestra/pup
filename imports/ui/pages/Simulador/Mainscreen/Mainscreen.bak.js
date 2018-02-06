/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col } from 'react-bootstrap';
import './Mainscreen.scss';
import { dict } from '../../SeleccionadorProducto/ProductoOuter/ProductoOuter';

class Mainscreen extends React.Component {
  render() {
    return (
      <div className="Mainscreen">
        <Col xs={12} sm={8} md={9}>
          <img src="/escenas/ventanafija-blanco.jpg" alt="test" className="img-test" />
        </Col>
      </div>
    );
  }
}

export default Mainscreen;
