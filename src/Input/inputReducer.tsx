
import React from 'react'
import { Action } from 'redux'

const initialState = {
    value: 0
}

const inputReducer = (state = initialState, action: Action) => {
    return <input></input> 
}

export default inputReducer