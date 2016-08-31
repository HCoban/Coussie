import { Greeting } from './greeting';
import { connect } from 'react-redux';
import { logOut } from '../actions/session_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut())
});

const GreetingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

export default GreetingContainer;
