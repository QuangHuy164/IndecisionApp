import {combineReducers} from 'redux'

import inputReducer from '../Input/inputReducer'
import todoReducer from '../components/todoReducer'
import nameDescriptionReducer from './nameDescriptionReducer'



const rootReducer = combineReducers({

  inputReducer:inputReducer,
  todoReducer:todoReducer,
  nameDescriptionReducer: nameDescriptionReducer
})

export default rootReducer
