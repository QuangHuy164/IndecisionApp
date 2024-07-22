import {ToDoReducer} from '@/types/todoReducer.types'
import {Action} from 'redux'
import { CREATE_TODO_ITEM, DELETE_TODO_ITEM, UPDATE_TODO_ITEM } from './TodoAction'

const initialState: ToDoReducer = {
  inputValue: '',
  todoArray: [],
}

const todoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_TODO_ITEM:
      state = {...state}
      state.inputValue = (action as unknown as any).payload
      console.log('UPDATE_TODO_ITEM payload', (action as unknown as any).payload)
      return state

    case CREATE_TODO_ITEM:
      state = {...state}
      
      console.log()
      return state
    
    case DELETE_TODO_ITEM:
        return state

    default:
      return {...state}
  }
}

export default todoReducer
