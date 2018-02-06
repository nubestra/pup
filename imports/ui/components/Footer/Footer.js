import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Grid, Row, Col } from 'react-bootstrap';

import './Footer.scss';

const Footer = () => (
  <div className="Footer">
    <Grid>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <h3>SERVICIOS</h3>
          <ul>
            <li><a href="http://aldeco.com">Contacto</a></li>
            <li><a href="http://aldeco.com">FAQ</a></li>
            <li><a href="http://aldeco.com">Encuentranos</a></li>
            <li><a href="http://aldeco.com">Casa del Tec</a></li>
            <li><a href="http://aldeco.com">Mantenimientos</a></li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <h3>LINEAS</h3>
          <ul>
            <li><a href="http://aldeco.com">Puertas y ventanas</a></li>
            <li><a href="http://aldeco.com">Cancelería</a></li>
            <li><a href="http://aldeco.com">Barandales</a></li>
            <li><a href="http://aldeco.com">Templados</a></li>
            <li><a href="http://aldeco.com">Fachadas</a></li>
          </ul>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <h3>LEGAL</h3>
          <ul>
            <li><a href="http://aldeco.com">Términos y condiciones</a></li>
            <li><a href="http://aldeco.com">Privacidad y cookies</a></li>
            <li><a href="http://aldeco.com">BCR</a></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={12} md={12}>
          <hr className="separador" />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <FontAwesome name="facebook-f" />
        </Col>
        <Col xs={12} sm={6} md={9}>
          <h5>ALDECO 2018, BY COLECTIVOHYGGE</h5>
        </Col>
      </Row>
    </Grid>
  </div>
);

Footer.propTypes = {};

export default Footer;
