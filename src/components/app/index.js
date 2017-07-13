import React from 'react';
import SessionScene from 'scenes/session';

import styles from './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <SessionScene/>
      </div>
    );
  }
}

export default App;
