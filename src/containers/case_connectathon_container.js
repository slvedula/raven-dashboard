import { connect } from 'react-redux'
import Connectathon from '../components/case/connectathon'
import {
  searchWithParams,
  updateParameterResource,
  initializeParameterResource,
  initializeServers
} from '../actions/connectathon_action'

function mapStateToProps(state, ownProps) {
  return {
    case: state.case,
    connectathon: state.connectathon
  };
}

const connectathonContainer = connect(mapStateToProps, {
  initializeParameterResource,
  updateParameterResource,
  searchWithParams,
  initializeServers
})(Connectathon);

export default connectathonContainer;
