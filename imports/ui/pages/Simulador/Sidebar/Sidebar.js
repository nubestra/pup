/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Col } from 'react-bootstrap';
import Producto from './Producto/Producto.js';
import Categoria from './Categoria/Categoria.js';

import './Sidebar.scss';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="Sidebar">
        <Col xs={12} sm={4} md={3}>
          <p>Acabados de producto</p>
          <Producto />
          <Categoria />
        </Col>
      </div>
    );
  }
}

export default Sidebar;
