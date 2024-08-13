import {DELETE_NAME, UPDATE_EDIT_INDEX, SAVE_NAME} from '../action/nameDescriptionAction'
import {NameDescriptionReducer} from '../types/nameDescription.types'

const initialState: NameDescriptionReducer = {
  nameDescriptionArray: [],
  editIndex: 0
}

const nameDescriptionReducer = (
  state = initialState,
  action: {type: string; payload: any}
) => {
  switch (action.type) {
    case SAVE_NAME:
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

      case UPDATE_EDIT_INDEX:
      state = {...state}
      state.editIndex = action.payload
      // console.log('edit',state.editIndex)
      return state

    default:
      state = {...state}

      return state
  }
}

export default nameDescriptionReducer
