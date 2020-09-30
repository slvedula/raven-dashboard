import { connect } from 'react-redux'
import NavBottom from '../components/nav-bottom'

import {
  // sendToEDRS
} from '../actions/nav_bottom';

function mapStateToProps(state, ownProps) {
  return {
    case: state.case
  };
}

const navBottomContainer = connect(mapStateToProps, {
  // sendToEDRS
})(NavBottom);

export default navBottomContainer;
