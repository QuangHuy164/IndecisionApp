export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE'

export const updateInputValue = (a:string) => {
    return {
        type: UPDATE_INPUT_VALUE,
        payload: a
    }
}

export const SUBMIT_INPUT_VALUE = 'SUBMIT_INPUT_VALUE'

export const submitInputValue = (b:[]) => {
    return {
    type: SUBMIT_INPUT_VALUE,
    payload: b
    }
}