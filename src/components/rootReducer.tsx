import {combineReducers} from 'redux'
import counterReducer from '../counter/counterReducer'
import inputReducer from '../Input/inputReducer'
import todoReducer from './todoReducer'
import nameDescriptionReducer from '../reducer/nameDescriptionReducer'



const rootReducer = combineReducers({
  counterReducer: counterReducer, 
  inputReducer:inputReducer,
  todoReducer:todoReducer,
  nameDescriptionReducer: nameDescriptionReducer
})

export default rootReducer
