import React from 'react'

import {useDispatch, useSelector} from 'react-redux'

import {incrementCounterValue, decrementCounterValue} from './counterActions'
import {getCounterValue} from '../selector/counterSelector'

// import {decrement, increment, incrementByAmount} from './counterSlice'

const Counter = () => {
  const counterValue = useSelector(getCounterValue)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
            // dispatch(incrementByAmount(10))

            dispatch(incrementCounterValue())
          }}>
          Increment
        </button>

        <span>{counterValue}</span>
        <button
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decrementCounterValue())
          }}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
