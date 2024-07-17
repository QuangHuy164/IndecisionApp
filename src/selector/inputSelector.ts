import { RootReducer } from "@/types/rootReducer.type"
import { createSelector } from "reselect"


const getInputReducer = (state:RootReducer) => state.InputReducer

export const getInputValue = createSelector(getInputReducer, (r) => {
    return r.value
})