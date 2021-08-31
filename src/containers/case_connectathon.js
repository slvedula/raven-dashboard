import { connect } from 'react-redux'
import Connectathon from '../components/case/connectathon'

function mapStateToProps(state, ownProps) {
  return {
    case: state.case
  };
}

const connectathonContainer = connect(mapStateToProps, {
})(Connectathon);

export default connectathonContainer;
