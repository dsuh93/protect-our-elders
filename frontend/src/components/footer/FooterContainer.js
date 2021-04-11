import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import footer from './footer';

const mapStateToProps = (state) => {
    debugger
  return {
    isloggedIn: state.session.isAuthenticated
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(footer);