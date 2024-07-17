import {CounterReducer} from '@/types/counterReducer.types'
import {Action} from 'redux'

const initialState: CounterReducer = {
  value: 0
}

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('INCREMENT', action)
      state = {...state}

      state.value += 1

      return state

    case 'DECREMENT':
      console.log('DECREMENT', action)
      state = {...state}

      state.value -= 1
      return state

    default:
      return {...state}
  }
}

export default counterReducer
