import React from 'react';
import { Route } from 'react-router-dom';
import Terms from '../../ui/pages/Terms/Terms';
import Privacy from '../../ui/pages/Privacy/Privacy';
import ExamplePage from '../../ui/pages/ExamplePage/ExamplePage';

export default (
  <div>
    <Route name="terms" path="/terms" component={Terms} data="pages.terms" />
    <Route name="privacy" path="/privacy" component={Privacy} />
    <Route name="examplePage" path="/example-page" component={ExamplePage} />
  </div>
);
