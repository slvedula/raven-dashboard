import { connect } from 'react-redux'
import CasePicker from '../components/case-picker'

import {
  getCases,
  filterByCaseNumber,
  filterBySystem
} from '../actions/cases';

function mapStateToProps(state, ownProps) {
  return {
    picker: state.picker
  };
}

const casePickerContainer = connect(mapStateToProps, {
  getCases,
  filterByCaseNumber,
  filterBySystem
})(CasePicker);

export default casePickerContainer;
