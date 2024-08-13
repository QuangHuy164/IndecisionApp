import { DELETE_NAME, SAVE_NAME, UPDATE_EDIT_INDEX } from "../action/nameDescriptionAction";
import { NameDescriptionReducer1 } from "../types/nameDescription1.type";


const initialState: NameDescriptionReducer1 = {
    nameDescriptionArray: [],
    editIndex: 0
}

const nameDescriptionReducer1 = (state = initialState, action: {type:string, payload: any}) => {
    switch (action.type) {
        case SAVE_NAME:
            state = {...state}
        state.nameDescriptionArray = action.payload
        console.log('Name description', action.payload)
        return state
        case DELETE_NAME:
            state ={...state}
            state.nameDescriptionArray = state.nameDescriptionArray.filter((nameDescription, index) => {
                return index !== action.payload
            })
        case UPDATE_EDIT_INDEX:
            state = {...state}
            state.editIndex = action.payload
            console.log('edit',state.editIndex)
        return state

        default: state = {...state}
        return state
    }
}

export default nameDescriptionReducer1;