import { connect } from 'react-redux';
import Volunteers from './volunteers';


const mapStateToProps = (state) => {
    return {
        language: state.ui.language
    };
};


export default connect(
    mapStateToProps,
    null
)(Volunteers);