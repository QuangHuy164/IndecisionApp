import {
  DELETE_NAME_1,
  SAVE_NAME_1,
  UPDATE_EDIT_INDEX_1
} from '../action/nameDescriptionAction1'
import {NameDescriptionReducer1} from '../types/nameDescription1.type'

const initialState: NameDescriptionReducer1 = {
  nameDescriptionArray: [],
  editIndex: 0,
  inputValue: ''
}

const nameDescriptionReducer1 = (
  state = initialState,
  action: {type: string; payload: any}
) => {
  switch (action.type) {
    case SAVE_NAME_1:
      state = {...state}
      state.nameDescriptionArray = action.payload
      return state
    case DELETE_NAME_1:
      state = {...state}
      state.nameDescriptionArray = state.nameDescriptionArray.filter(
        (nameDescription, index) => {
          return index !== action.payload
        }
      )
    case UPDATE_EDIT_INDEX_1:
      state = {...state}
      state.editIndex = action.payload

      return state

    default:
      state = {...state}
      return state
  }
}

export default nameDescriptionReducer1
