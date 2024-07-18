import {combineReducers} from 'redux'
import counterReducer from '../counter/counterReducer'
import inputReducer from '../Input/inputReducer'
import todoReducer from './todoReducer'


const rootReducer = combineReducers({
  counterReducer: counterReducer, 
  inputReducer:inputReducer,
  todoReducer:todoReducer
})

export default rootReducer
