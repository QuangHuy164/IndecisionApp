import {combineReducers} from 'redux'
import inputReducer from '../Input/inputReducer'
import todoReducer from '../components/todoReducer'
import nameDescriptionReducer from './nameDescriptionReducer'
import nameDescriptionReducer1 from './nameDescriptionReducer1'

const rootReducer = combineReducers({
  inputReducer: inputReducer,
  todoReducer: todoReducer,
  nameDescriptionReducer: nameDescriptionReducer,
  nameDescriptionReducer1: nameDescriptionReducer1
})

export default rootReducer
