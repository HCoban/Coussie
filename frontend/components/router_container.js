import { connect } from 'react-redux';
import AppRouter from './router';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const AppRouterContainer = connect(
  mapStateToProps
)(AppRouter);

export default AppRouterContainer;
