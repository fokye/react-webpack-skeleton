import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from './redux.setup.js';
import SessionScene from './scenes/session';

// -------------------------------------------------------------------------- //
const app = (
  <ReduxProvider>
    <SessionScene/>
  </ReduxProvider>
);
// -------------------------------------------------------------------------- //
const getContainer = () => document.querySelector('#app');

const container = getContainer();
if (container) {
  ReactDOM.render(app, container);
} else {
  document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(app, getContainer());
  });
}
// -------------------------------------------------------------------------- //
