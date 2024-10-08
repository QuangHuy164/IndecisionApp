import {
  UPDATE_EDIT_INDEX_2,
  DELETE_NAME_2,
  SAVE_NAME_2
} from '../action/nameDescriptionAction2'
import {NameDescriptionReducer2} from '../types/nameDescription2.type'

const initialState: NameDescriptionReducer2 = {
  nameDescriptionArray: [],
  editIndex: 0
}
const nameDescriptionReducer2 = (
  state = initialState,
  action: {type: string; payload: any}
) => {
  switch (action.type) {
    case SAVE_NAME_2:
      state = {...state}
      state.nameDescriptionArray = action.payload
      return state

    case DELETE_NAME_2:
      state = {...state}
      state.nameDescriptionArray = state.nameDescriptionArray.filter(
        (nameDescription, index) => {
          return index !== action.payload
        }
      )
      return state

    case UPDATE_EDIT_INDEX_2:
      state = {...state}
      state.editIndex = action.payload
      return state

    default:
      state = {...state}
      return state
  }
}

export default nameDescriptionReducer2
