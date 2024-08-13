import {InputReducer} from './inputReducer.types'
import {NameDescriptionReducer} from './nameDescription.types'
import { NameDescriptionReducer1 } from './nameDescription1.type'
import {ToDoReducer} from './todoReducer.types'
import { NameDescriptionReducer2 } from './nameDescription2.type'

export interface RootReducer {
  inputReducer: InputReducer
  todoReducer: ToDoReducer
  nameDescriptionReducer: NameDescriptionReducer
  nameDescriptionReducer1: NameDescriptionReducer1
  nameDescriptionReducer2: NameDescriptionReducer2
}
