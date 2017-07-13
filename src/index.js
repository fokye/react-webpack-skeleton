import { applyMiddleware, combineReducers, createStore } from 'redux';

import App from './components/app';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import createSessionReducer from 'scenes/session/reducer';
import thunk from 'redux-thunk';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((
    <ReduxProvider store={createStore(combineReducers({
      session: createSessionReducer()
    }), applyMiddleware(thunk))}>
      <App/>
    </ReduxProvider>
  ), document.querySelector('#app'));
});
