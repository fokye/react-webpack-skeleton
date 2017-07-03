import PropTypes from 'prop-types';
import React from 'react';

class App extends React.Component {
  static get propTypes() {
    const { string } = PropTypes;
    return {
      name: string.isRequired
    };
  }

  render() {
    const { name } = this.props;
    return (
      <div>{name}</div>
    );
  }
}

export default App;
