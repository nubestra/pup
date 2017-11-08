import React from 'react';
import { hydrate } from 'react-dom';
import { onPageLoad } from 'meteor/server-render';
import App from '../../ui/layouts/App/App';
import '../both/api';

import '../../ui/stylesheets/app.scss';

onPageLoad(() => {
  hydrate(<App />, document.getElementById('react-root'));
});
