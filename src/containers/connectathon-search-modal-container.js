import { connect } from 'react-redux'
import ConnectathonSearchModal from '../components/case/connectathon-search-modal'

function mapStateToProps(state, ownProps) {
  return {
    case: state.case
  };
}

const connectathonSearchModalContainer = connect(mapStateToProps, {
})(ConnectathonSearchModal);

export default connectathonSearchModalContainer;
