import { applyMiddleware, combineReducers, createStore } from 'redux';

import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import React from 'react';

import createSessionReducer from './scenes/session/reducer';
import thunk from 'redux-thunk';

// -------------------------------------------------------------------------- //

/**
 * Reducers are responsible for applying state changes based on dispatched actions.
 */
const reducer = combineReducers({
  session: createSessionReducer()
});

/**
 * Enhancers can observe and/or intercept dispatched actions.
 */
const enhancer = applyMiddleware(thunk);

// -------------------------------------------------------------------------- //

const store = createStore(reducer, enhancer);

class ReduxProvider extends React.Component {
  static get propTypes() {
    const { node } = PropTypes;
    return {
      children: node
    };
  }

  render() {
    const { props: { children } } = this;
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }
}

export default ReduxProvider;
