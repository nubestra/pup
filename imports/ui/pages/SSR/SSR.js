import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SSR = Component => (props) => (<Component {...props} />);

SSR.propTypes = {};

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(SSR);
