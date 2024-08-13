import {InputReducer} from './inputReducer.types'
import {NameDescriptionReducer} from './nameDescription.types'
import { NameDescriptionReducer1 } from './nameDescription1.type'
import {ToDoReducer} from './todoReducer.types'

export interface RootReducer {
  inputReducer: InputReducer
  todoReducer: ToDoReducer
  nameDescriptionReducer: NameDescriptionReducer
  nameDescriptionReducer1: NameDescriptionReducer1
}
