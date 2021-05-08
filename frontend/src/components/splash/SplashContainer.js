import { connect } from 'react-redux';
import Splash from './splash';

const mapStateToProps = (state) => {
    return {
        language: state.ui.language
    };
};


export default connect(
    mapStateToProps,
    null
)(Splash);