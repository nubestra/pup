import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export default () => {
  const initialPageState = window.__INITIAL_PAGE_DATA__; // eslint-disable-line
  delete window.__INITIAL_PAGE_DATA__; // eslint-disable-line
  return createStore(state => state, initialPageState, applyMiddleware(thunk));
};
