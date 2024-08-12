import {RootReducer} from '../types/rootReducer.type'
import {createSelector} from 'reselect'

const getNameDescriptionReducer = (state: RootReducer) =>
  state.nameDescriptionReducer

export const getNameDescriptionArray = createSelector(
  getNameDescriptionReducer,
  (nameDescriptionReducer) => {
    return nameDescriptionReducer.nameDescriptionArray
  }
)

export const getEditIndex = createSelector(
  getNameDescriptionReducer,
  (nameDescriptionReducer) => {
    return nameDescriptionReducer.editIndex
  }
)
