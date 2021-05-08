import { connect } from 'react-redux';
import Protection from './protection';


const mapStateToProps = (state) => {
    return {
        language: state.ui.language
    };
};


export default connect(
    mapStateToProps,
    null
)(Protection);