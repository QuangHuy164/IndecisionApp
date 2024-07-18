
import { RootReducer } from "@/types/rootReducer.type";
import { createSelector } from "reselect";

const getToDoReducer = (state:RootReducer) => state.todoReducer

export const getInputValue = createSelector(getToDoReducer, (r) => {
    return r.inputValue
})