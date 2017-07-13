import Panel from '_/components/panel';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';
import { t } from '_/services/i18n';

class SessionScene extends React.Component {
  static get propTypes() {
    const { bool, func } = PropTypes;
    return {
      isSigningIn: bool.isRequired,
      onSignIn: func.isRequired
    };
  }

  handleSignIn = (event) => {
    const { props: { onSignIn } } = this;
    event.preventDefault();
    onSignIn();
    return false;
  };

  render() {
    const { handleSignIn, props: { isSigningIn } } = this;
    return (
      <div className={styles.sessionScene}>
        <Panel footer={(
          <div className={styles.action}>
            <button disabled={isSigningIn} onClick={handleSignIn}>{t('sign_in')}</button>
          </div>
        )} header={(
          <div>{t('sign_in')}</div>
        )}>
          <div className={styles.field}>
            <input disabled={isSigningIn} placeholder='you@example.com' type='email'/>
          </div>
          <div className={styles.field}>
            <input disabled={isSigningIn} placeholder={t('password')} type='password'/>
          </div>
        </Panel>
      </div>
    );
  }
}

export default SessionScene;
