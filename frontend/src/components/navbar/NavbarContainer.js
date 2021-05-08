import { connect } from 'react-redux';
import Navbar from './navbar';


const mapStateToProps = (state) => {
    return {
        language: state.ui.language
    };
};


export default connect(
    mapStateToProps,
    null
)(Navbar);