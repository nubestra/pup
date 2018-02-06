/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { dict } from '../../../Simulador';

export default class CategoriaSelect extends Component {
  render() {
    function setDict(categoria) {
      dict.set('categoria', categoria);
      console.log(`${dict.get('categoria')} Seleccionada`);
    }
    return (
      <button className="CategoriaSelect Select" onClick={() => setDict(this.props.categoria)}>
        <h4>{this.props.categoria}</h4>
      </button>
    );
  }
}

CategoriaSelect.propTypes = {
  categoria: PropTypes.string,
};

CategoriaSelect.defaultProps = {
  categoria: '',
};
