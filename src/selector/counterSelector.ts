import {RootReducer} from '@/types/rootReducer.type'
import {createSelector} from 'reselect'

const getCounterReducer = (state: RootReducer) => state.counterReducer

export const getCounterValue = createSelector(getCounterReducer, (r) => {
  return r.value
})
