import SessionScene from './components/scene';

import { connect } from 'react-redux';
import onCreate from './actions/create';

const mapStateToProps = state => ({
  isCreating: !!state.session.isCreating
});

export default connect(mapStateToProps, { onCreate })(SessionScene);
