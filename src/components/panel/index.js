import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

/**
 * A panel has an optional header and/or footer, and includes children whose
 * content flexes to fill the space allotted by the parent container.
 */
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
        {header && <div className={styles.header}>{header}</div>}
        <div className={styles.content}>{children}</div>
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    );
  }
}

export default Panel;
