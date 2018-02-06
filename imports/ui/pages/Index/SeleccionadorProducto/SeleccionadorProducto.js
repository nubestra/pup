import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './SeleccionadorProducto.scss';
import ProductoOuter from './ProductoOuter/ProductoOuter.js';

export default class SeleccionadorProducto extends Component {
  render() {
    return (
      <div className="seleccionador-producto">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <h2>Selecciona tu producto</h2>
              <svg width="77px" height="29px" viewBox="0 0 77 29" version="1.1">
                <defs />
                <g id="Simulador" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Principal" transform="translate(-682.000000, -1079.000000)" stroke="#021827" strokeWidth="3.4000001">
                    <rect i="testimonialBorder-Copy" x="684" y="1081" width="73" height="25" rx="12.5" />
                  </g>
                </g>
              </svg>
            </Col>
          </Row>
          <Row className="mt-40 fila-productos">
            <ProductoOuter producto="Ventanas" />
            <ProductoOuter producto="Puertas" />
            <ProductoOuter producto="Barandales" />
            <ProductoOuter producto="Cancelería" />
          </Row>
          <Row className="fila-productos">
            <ProductoOuter producto="PVC" />
            <ProductoOuter producto="Templados" />
            <ProductoOuter producto="Aluminio" />
            <ProductoOuter producto="Fachadas" />
          </Row>
        </Grid>
      </div>
    );
  }
}
