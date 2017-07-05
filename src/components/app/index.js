import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

class App extends React.Component {
  static get propTypes() {
    const { string } = PropTypes;
    return {
      name: string.isRequired
    };
  }

  render() {
    const { props: { name } } = this;
    return (
      <div className={styles.app}>{name}</div>
    );
  }
}

export default App;
