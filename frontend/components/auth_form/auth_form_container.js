import { connect } from 'react-redux';
import AuthForm from './auth_form';
import { logIn, logOut, signUp } from '../../actions/session_actions';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? logIn : signUp;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

const AuthFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);

export default AuthFormContainer;
