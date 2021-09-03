import { connect } from 'react-redux'
import Connectathon from '../components/case/connectathon'
import {searchWithParams, updateParameterResource } from '../actions/connectathon'

function mapStateToProps(state, ownProps) {
  return {
    case: state.case,
    connectathon: state.connectathon
  };
}

const connectathonContainer = connect(mapStateToProps, {
  updateParameterResource,
  searchWithParams
})(Connectathon);

export default connectathonContainer;
