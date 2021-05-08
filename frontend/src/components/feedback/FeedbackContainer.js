import { connect } from 'react-redux';
import Feedback from './feedback';


const mapStateToProps = (state) => {
    return {
        language: state.ui.language
    };
};


export default connect(
    mapStateToProps,
    null
)(Feedback);