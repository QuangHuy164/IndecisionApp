import {ToDoReducer} from '@/types/todoReducer.types'
import {Action} from 'redux'
import {SUBMIT_INPUT_VALUE, UPDATE_INPUT_VALUE} from './TodoAction'

const initialState: ToDoReducer = {
  inputValue: '',
  array: [],
}

const todoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      state = {...state}
      state.inputValue = (action as unknown as any).payload
      return state
    case SUBMIT_INPUT_VALUE:
      state = {...state}
      state.array.push() 

    default:
      return {...state}
  }
}

export default todoReducer
