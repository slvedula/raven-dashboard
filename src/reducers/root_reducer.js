import { combineReducers } from 'redux'
import { pickerReducer } from './picker_reducer'
import { caseReducer } from './case_reducer'
import { connectathonReducer } from './connectathon_reducer'

export default () => combineReducers({
  picker: pickerReducer,
  case: caseReducer,
  connectathon: connectathonReducer
})
