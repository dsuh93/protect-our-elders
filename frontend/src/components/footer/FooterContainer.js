import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import footer from './footer';
import { selectLanguage } from '../../actions/language_actions';

const mapStateToProps = (state) => {
    // debugger
  return {
    isloggedIn: state.session.isAuthenticated,
    language: state.ui.language
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    selectLanguage: (language) => dispatch(selectLanguage(language))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(footer);