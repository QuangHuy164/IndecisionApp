import {CounterReducer} from './counterReducer.types'
import { InputReducer } from './inputReducer.types'
import { ToDoReducer } from './todoReducer.types'

export interface RootReducer {
  inputReducer: InputReducer
  counterReducer: CounterReducer
  todoReducer: ToDoReducer
}
