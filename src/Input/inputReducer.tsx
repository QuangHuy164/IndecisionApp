import {InputReducer} from '../types/inputReducer.types'
import {Action} from 'redux'
import {UPDATE_INPUT_VALUE} from './inputAction'

const initialState: InputReducer = {
  inputValue: ''
}

const inputReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      console.log(
        'UPDATE_INPUT_VALUE payload',
        (action as unknown as any).payload
      )

      state = {...state}
      state.inputValue = (action as unknown as any).payload //'inputValue' property being updated with value of 'payload' from dispatch action

      return state

    default:
      return {...state}
  }
}

export default inputReducer
