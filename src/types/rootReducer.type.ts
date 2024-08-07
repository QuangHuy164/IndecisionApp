import {CounterReducer} from './counterReducer.types'
import { InputReducer } from './inputReducer.types'
import { NameDescriptionReducer } from './nameDescription.types'
import { ToDoReducer } from './todoReducer.types'

export interface RootReducer {
  inputReducer: InputReducer
  counterReducer: CounterReducer
  todoReducer: ToDoReducer
  nameDescriptionReducer:NameDescriptionReducer
}
