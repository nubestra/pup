import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { dict } from '../../../Simulador/Simulador';

export default class ProductoOuter extends Component {
  render() {
    function setDict(producto) {
      dict.set('producto', producto);
      console.log(dict.get('producto'));
    }
    return (
      <Col xs={3} md={3} className={this.props.producto}>
        <Link to="/simulador" onClick={() => setDict(this.props.producto)} >
          <p>{this.props.producto}</p>
        </Link>
      </Col>
    );
  }
}

ProductoOuter.propTypes = {
  producto: PropTypes.string,
};

ProductoOuter.defaultProps = {
  producto: { title: 'test' },
};
