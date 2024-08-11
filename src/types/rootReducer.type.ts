import {InputReducer} from './inputReducer.types'
import {NameDescriptionReducer} from './nameDescription.types'
import {ToDoReducer} from './todoReducer.types'

export interface RootReducer {
  inputReducer: InputReducer

  todoReducer: ToDoReducer
  nameDescriptionReducer: NameDescriptionReducer
}
