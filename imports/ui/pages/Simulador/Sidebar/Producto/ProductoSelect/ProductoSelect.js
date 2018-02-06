/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { dict } from '../../../Simulador';

export default class ProductoSelect extends Component {
  render() {
    function setDict(producto) {
      dict.set('producto', producto);
      console.log(`${dict.get('producto')} Seleccionado`);
    }
    return (
      <button className="ProductoSelect Select" onClick={() => setDict(this.props.producto)}>
        <h4>{this.props.producto}</h4>
      </button>
    );
  }
}

ProductoSelect.propTypes = {
  producto: PropTypes.string,
};

ProductoSelect.defaultProps = {
  producto: '',
};
