import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

class Panel extends React.Component {
  static get propTypes() {
    const { node } = PropTypes;
    return {
      children: node,
      footer: node,
      header: node
    };
  }

  render() {
    const { props: { children, footer, header } } = this;
    return (
      <div className={styles.panel}>
        {header && (<div className={styles.header}>{header}</div>)}
        <div className={styles.content}>{children}</div>
        {footer && (<div className={styles.footer}>{footer}</div>)}
      </div>
    );
  }
}

export default Panel;
