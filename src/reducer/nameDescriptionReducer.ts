import {DELETE_NAME, EDIT_NAME} from '../action/nameDescriptionAction'
import {NameDescriptionReducer} from '../types/nameDescription.types'
import {Action} from 'redux'

const initialState: NameDescriptionReducer = {
  nameDescriptionArray: []
}

const nameDescriptionReducer = (
  state = initialState,
  action: {type: string; payload: any}
) => {
  switch (action.type) {
    case EDIT_NAME:
      state = {...state}
      state.nameDescriptionArray = action.payload
      console.log(state.nameDescriptionArray)
      return state

    case DELETE_NAME:
      state = {...state}

      state.nameDescriptionArray = state.nameDescriptionArray.filter(
        (NameDescription, index) => {
          return index !== action.payload
        }
      )
      
      return state

    default:
      state = {...state}

      return state
  }
}

export default nameDescriptionReducer
