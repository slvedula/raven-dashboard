import { connect } from 'react-redux'
import FhirExplorer from '../components/fhir-explorer'

function mapStateToProps(state, ownProps) {
  return {
    case: state.case
  };
}

const fhirExplorerContainer = connect(mapStateToProps, {
})(FhirExplorer);

export default fhirExplorerContainer;
