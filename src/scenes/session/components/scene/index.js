import Panel from '_/components/panel';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';
import { t } from '_/services/i18n';

/**
 * This scene renders the UI for creating a session (i.e: a sign in page).
 */
class SessionScene extends React.Component {
  static get propTypes() {
    const { bool, func } = PropTypes;
    return {
      isCreating: bool.isRequired,
      onCreate: func.isRequired
    };
  }

  // Define callback handlers like this with a `handle` prefix, and bind them like this (as a lambda function assigned to an instance property.
  handleCreate = (event) => {
    const { props: { onCreate } } = this;
    event.preventDefault();
    onCreate();
    return false;
  };

  render() {
    const { handleCreate, props: { isCreating } } = this;
    return (
      <div className={styles.sessionScene}>
        <Panel footer={(
          <div className={styles.action}>
            <button disabled={isCreating} onClick={handleCreate}>{t('sign_in')}</button>
          </div>
        )} header={(
          <div>{t('sign_in')}</div>
        )}>
          <div className={styles.field}>
            <input disabled={isCreating} placeholder='you@example.com' type='email'/>
          </div>
          <div className={styles.field}>
            <input disabled={isCreating} placeholder={t('password')} type='password'/>
          </div>
        </Panel>
      </div>
    );
  }
}

export default SessionScene;
