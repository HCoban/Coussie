import Navbar from './navbar';
import { connect } from 'react-redux';
import { logOut } from '../../actions/session_actions';
import { filter } from '../../actions/restaurant_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logOut()),
  filter: (query) => dispatch(filter(query))
});

const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

export default NavbarContainer;
