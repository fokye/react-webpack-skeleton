import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from './redux.setup.js';
import SessionScene from './scenes/session';

ReactDOM.render((
  <ReduxProvider>
    <SessionScene/>
  </ReduxProvider>
), document.querySelector('#app'));
