import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from './redux.setup.js';
import SessionScene from './scenes/session';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((
    <ReduxProvider>
      <SessionScene/>
    </ReduxProvider>
  ), document.querySelector('#app'));
});
