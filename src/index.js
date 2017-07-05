import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';

const app = <App name='Hello, world!'/>;

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(app, document.querySelector('#app'));
});
