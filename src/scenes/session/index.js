import SessionScene from './components/scene';

import { connect } from 'react-redux';
import createSession from './actions/create';

export default connect(state => ({
  isSigningIn: !!state.session.isSigningIn
}), dispatch => ({
  onSignIn() {
    dispatch(createSession());
  }
}))(SessionScene);
