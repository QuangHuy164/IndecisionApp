import { getInputValue } from '../selector/inputSelector'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateInputValue } from './inputAction'


const Input = () => {
    
    const inputValue = useSelector(getInputValue)
    const dispatch = useDispatch()
    
    return <div><input value={inputValue} onChange={(e) => {dispatch(updateInputValue(e.target.value))}}></input></div>
}

export default Input