import { DELETE_NAME, SAVE_NAME } from "../action/nameDescriptionAction"
import { NameDescriptionReducer2 } from "../types/nameDescription2.type"

const initialState : NameDescriptionReducer2 = {
    nameDescriptionArray: [],
    editIndex: 0
}
    const nameDescriptionReducer2 = (state = initialState, action: {type:string, payload:any}) => {
        switch (action.payload) {
        case SAVE_NAME:
            state = {...state}
            state.nameDescriptionArray = action.payload
            return state
        case DELETE_NAME:
            state = {...state}
            state.nameDescriptionArray = state.nameDescriptionArray.filter((nameDescription, index) => {
                return index !== action.payload
            })

            default: state = {...state}
            return state
        }
    }