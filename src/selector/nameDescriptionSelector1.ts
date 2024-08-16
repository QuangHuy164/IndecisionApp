import {createSelector} from 'reselect'
import {RootReducer} from '../types/rootReducer.type'

const getNameDescriptionReducer = (state: RootReducer) => {
  return state.nameDescriptionReducer1
}

export const getNameDescriptionArray = createSelector(
  getNameDescriptionReducer,
  (nameDescriptionReducer1) => {
    return nameDescriptionReducer1.nameDescriptionArray
  }
)

export const getEditIndex = createSelector(
  getNameDescriptionReducer,
  (nameDescriptionReducer1) => {
    return nameDescriptionReducer1.editIndex
  }
)

