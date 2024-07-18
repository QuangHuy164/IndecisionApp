export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE'

export const updateInputValue = (a: string) => {
  return {
    type: UPDATE_INPUT_VALUE,
    payload: a
  }
}

