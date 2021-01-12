import { connect } from 'react-redux'
import ReleaseInfo from '../components/case/release-info'

function mapStateToProps(state, ownProps) {
  return {
    case: state.case
  };
}

const releaseInfoContainer = connect(mapStateToProps, {
})(ReleaseInfo);

export default releaseInfoContainer;
