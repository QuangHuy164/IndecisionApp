export const incrementCounterValue = () => {
  return {
    type: 'INCREMENT',
    payload: 1
  }
}

export const decrementCounterValue = () => {
  return {
    type: 'DECREMENT',
    payload: 1
  }
}
