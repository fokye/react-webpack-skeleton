import SessionScene from './components/scene';

import { connect } from 'react-redux';
import onCreate from './actions/create';

const mapStateToProps = state => ({
  isCreating: !!state.session.isCreating
});

const mapDispatchToProps = ({ onCreate });

export default connect(mapStateToProps, mapDispatchToProps)(SessionScene);
