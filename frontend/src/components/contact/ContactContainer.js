import { connect } from 'react-redux';
import Contact from './Contact';


const mapStateToProps = (state) => {
    return {
        language: state.ui.language
    };
};


export default connect(
    mapStateToProps,
    null
)(Contact);