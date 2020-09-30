import { connect } from 'react-redux'
import CaseSummary from '../components/case/summary'

function mapStateToProps(state, ownProps) {
  return {
    case: state.case
  };
}

const caseSummaryContainer = connect(mapStateToProps, {
})(CaseSummary);

export default caseSummaryContainer;
