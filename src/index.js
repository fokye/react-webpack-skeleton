import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const app = <App name='Hello, world!'/>;

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(app, document.querySelector('#app'));
});
