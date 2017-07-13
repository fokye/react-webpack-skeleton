import { applyMiddleware, combineReducers, createStore } from 'redux';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import SessionScene from './scenes/session';

import createSessionReducer from './scenes/session/reducer';
import thunk from 'redux-thunk';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render((
    <ReduxProvider store={createStore(combineReducers({
      session: createSessionReducer()
    }), applyMiddleware(thunk))}>
      <SessionScene/>
    </ReduxProvider>
  ), document.querySelector('#app'));
});
