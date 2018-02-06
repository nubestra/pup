/* eslint-disable no-underscore-dangle */
import React from 'react';
import ProductoSelect from './ProductoSelect/ProductoSelect.js';

import './Producto.scss';

class Producto extends React.Component {
  render() {
    return (
      <div className="Producto">
        <h3>Producto</h3>
        <ProductoSelect producto="Ventanas" />
        <ProductoSelect producto="Puertas" />
      </div>
    );
  }
}

export default Producto;
