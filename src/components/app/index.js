import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.css';

class App extends React.Component {
  static get propTypes() {
    const { func, string } = PropTypes;
    return {
      name: string.isRequired,
      onClick: func.isRequired
    };
  }

  handleClick = async () => {
    const { props: { onClick } } = this;
    onClick();
  };

  render() {
    const { props: { name } } = this;
    return (
      <div className={styles.app} onClick={this.handleClick}>{name}</div>
    );
  }
}

export default App;
