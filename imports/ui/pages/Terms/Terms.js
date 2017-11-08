import React from 'react';
import { connect } from 'react-redux';
import Page from '../Page/Page';

const Terms = ({ testing }) => (
  <div className="Terms">
    <Page
      title="Terms of Service"
      subtitle="Last updated May 29th, 2017"
      page="terms"
      content={testing}
    />
  </div>
);

const mapStateToProps = state => ({
  ...state,
});

export default connect(mapStateToProps)(Terms);
