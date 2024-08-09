import {ToDoReducer} from '@/types/todoReducer.types'
import {Action} from 'redux'
import {ADD_NOTE, DELETE_NOTE, UPDATE_NOTE} from './TodoAction'

const initialState: ToDoReducer = {
  inputValue: '',
  todoArray: []
}

const todoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_NOTE:
      state = {...state}
      state.inputValue = (action as unknown as any).payload
      console.log(
        'UPDATE_TODO_ITEM payload',
        (action as unknown as any).payload
      )
      return state

    case ADD_NOTE:
      state = {...state}

      console.log()
      return state

    case DELETE_NOTE:
      //  return state.filter(note => note.id !== action.id);
      return state

    default:
      return {...state}
  }
}

export default todoReducer
