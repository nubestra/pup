import React from 'react';
import PropTypes from 'prop-types';
import { renderToString } from 'react-dom/server';
import { Grid } from 'react-bootstrap';
import { onPageLoad } from 'meteor/server-render';
import { StaticRouter as Router, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import routes from '../both/routes';
import Navigation from '../../ui/components/Navigation/Navigation';
import Footer from '../../ui/components/Footer/Footer';

onPageLoad((sink) => {
  const context = {};
  const initial = { testing: '123' };
  const store = createStore(state => state, initial, applyMiddleware(thunk));

  const App = ({ location }) => {
    return (
      <Provider store={store}>
        <Router location={location} context={context}>
          <div className="App">
            <Navigation />
            <Grid>
              {routes}
            </Grid>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  };

  App.propTypes = {
    location: PropTypes.object.isRequired,
  };

  const initialPageState = store.getState();

  sink.renderIntoElementById('react-root', renderToString(<App location={sink.request.url} />));
  sink.appendToBody(`
    <script>
      window.__INITIAL_PAGE_DATA__ = ${JSON.stringify(initialPageState).replace(/</g, '\\u003c')}
    </script>
  `);
});

// SSR.server(routes);
