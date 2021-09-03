import { connect } from 'react-redux'
import ConnectathonSearchModal from '../components/case/connectathon-search-modal'

function mapStateToProps(state, ownProps) {
  return {
    connectathon: state.connectathon
  };
}

const connectathonSearchModalContainer = connect(mapStateToProps, {
})(ConnectathonSearchModal);

export default connectathonSearchModalContainer;
