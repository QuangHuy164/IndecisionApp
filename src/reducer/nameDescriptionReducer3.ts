import {DELETE_NAME_3, SAVE_NAME_3, UPDATE_EDIT_INDEX_3} from '../action/nameDescriptionAction3'
import {NameDescriptionReducer3} from '../types/nameDescription3.types'

const initialState: NameDescriptionReducer3 = {
  nameDescriptionArray: [],
  editIndex: 0
}

const nameDescriptionReducer3 = (
  state = initialState,
  action: {type: string; payload: any}
) => {
  switch (action.type) {
    case SAVE_NAME_3:
      state = {...state}
      state.nameDescriptionArray = action.payload
      return state

    case DELETE_NAME_3:
        state = {...state}
        state.nameDescriptionArray = state.nameDescriptionArray.filter((NameDescription,index)=> {
            return index !== action.payload
        })
        return state
    case UPDATE_EDIT_INDEX_3:
        state = {...state}
        state.editIndex = action.payload
        return state
    default:
      state = {...state}
      return state
  }
}

export default nameDescriptionReducer3
