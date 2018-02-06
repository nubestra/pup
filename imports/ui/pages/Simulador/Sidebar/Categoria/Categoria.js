/* eslint-disable no-underscore-dangle */
import React from 'react';
import CategoriaSelect from './CategoriaSelect/CategoriaSelect.js';
import './Categoria.scss';

class Categoria extends React.Component {
  render() {
    return (
      <div className="Categoria">
        <h3>Categoría</h3>
        <CategoriaSelect categoria="Panorama" />
        <CategoriaSelect categoria="Classic" />
        <CategoriaSelect categoria="Premium" />
        <CategoriaSelect categoria="Smart Frame" />
      </div>
    );
  }
}

export default Categoria;
