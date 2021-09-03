import { connect } from 'react-redux'
import Connectathon from '../components/case/connectathon'
import {searchWithParams} from '../actions/connectathon'

function mapStateToProps(state, ownProps) {
  return {
    case: state.case,
    connectathon: state.connectathon
  };
}

const connectathonContainer = connect(mapStateToProps, {
  searchWithParams
})(Connectathon);

export default connectathonContainer;
