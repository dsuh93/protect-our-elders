import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './Login';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.sessionError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    refreshErrors: (resetErrors) => dispatch(receiveErrors(resetErrors)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);