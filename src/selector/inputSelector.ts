import {RootReducer} from '@/types/rootReducer.type'
import {createSelector} from 'reselect'

const getInputReducer = (state: RootReducer) => state.inputReducer

export const getInputValue = createSelector(getInputReducer, (r) => {
  return r.inputValue
})
