import {RootReducer} from '../types/rootReducer.type'
import {createSelector} from 'reselect'

const getNameDescriptionReducer = (state: RootReducer) => {
  return state.nameDescriptionReducer2
  
}

export const getNameDescriptionArray = createSelector(
  getNameDescriptionReducer,
  (nameDescriptionReducer2) => {
    return nameDescriptionReducer2
  }
)

