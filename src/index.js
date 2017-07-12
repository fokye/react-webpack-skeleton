import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';

const logSomething = () => {
  // eslint-disable-next-line no-console
  console.log('Clicking is fun.');
};

const app = <App name='Hello, world!' onClick={logSomething}/>;

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(app, document.querySelector('#app'));
});
