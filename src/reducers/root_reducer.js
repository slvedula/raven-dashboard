import { combineReducers } from 'redux'
import { pickerReducer } from './picker_reducer'
import { caseReducer } from './case_reducer'

export default () => combineReducers({
  picker: pickerReducer,
  case: caseReducer
})
