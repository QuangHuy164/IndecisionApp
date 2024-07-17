import {combineReducers} from 'redux'
import counterReducer from '../counter/counterReducer'
import inputReducer from '@/Input/inputReducer'

const rootReducer = combineReducers({
  counterReducer: counterReducer, 
  inputReducer:inputReducer

})

export default rootReducer
