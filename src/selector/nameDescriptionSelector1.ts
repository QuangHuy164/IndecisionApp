import {createSelector} from 'reselect'
import {RootReducer} from '../types/rootReducer.type'

const getNameDescriptionArray = (state: RootReducer) => {
  state.nameDescriptionReducer1
}

export const getNameDescriptionReducer = createSelector(
  getNameDescriptionArray,
  (nameDescriptionReducer1) => {
    return nameDescriptionReducer1
  }
)

export const getEditIndex = createSelector(
  getNameDescriptionReducer,
  (nameDescriptionReducer) => {
    return nameDescriptionReducer
  }
)
