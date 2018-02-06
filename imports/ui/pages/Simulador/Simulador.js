/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import { ReactiveDict } from 'meteor/reactive-dict';
import Sidebar from './Sidebar/Sidebar.js';
import Mainscreen from './Mainscreen/Mainscreen.js';
import './Simulador.scss';

export const dict = new ReactiveDict('producto');

class Simulador extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('darkClass');
    console.log(dict.get('producto'));
  }
  componentWillUnmount() {
    document.body.classList.remove('darkClass');
  }
  handleSubmit() {
    console.log('click');
  }
  render() {
    return (
      <div className="Simulador">
        <Grid>
          <Row>
            <Sidebar />
            <Mainscreen />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Simulador;
