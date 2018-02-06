import React from 'react';
import SimuladorPortada from './SimuladorPortada/SimuladorPortada.js';
import SeleccionadorProducto from './SeleccionadorProducto/SeleccionadorProducto.js';

import './Index.scss';

const Index = () => (
  <div className="Index">
    <SimuladorPortada />
    <SeleccionadorProducto />
  </div>
);

export default Index;
