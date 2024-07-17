import {CounterReducer} from './counterReducer.types'
import { InputReducer } from './inputReducer.types'

export interface RootReducer {
  InputReducer: InputReducer
  counterReducer: CounterReducer
}
