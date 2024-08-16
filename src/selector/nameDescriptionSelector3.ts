import { createSelector } from "reselect";
import { RootReducer } from "../types/rootReducer.type";

const getNameDescriptionReducer = (state: RootReducer) => {
    return state.nameDescriptionReducer3
}

export const getNameDescriptionArray = createSelector(getNameDescriptionReducer, (nameDescriptionReducer3) => {
    return nameDescriptionReducer3.nameDescriptionArray
})

export const getEditIndex = createSelector(getNameDescriptionReducer, (nameDescriptionReducer3) => {
    return nameDescriptionReducer3.editIndex
})