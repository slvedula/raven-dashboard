import { connect } from 'react-redux'
import Case from '../components/case'

import {
  getCase,
} from '../actions/case';

function mapStateToProps(state, ownProps) {
  return {
    case: state.case
  };
}

const caseContainer = connect(mapStateToProps, {
  getCase,
})(Case);

export default caseContainer;
