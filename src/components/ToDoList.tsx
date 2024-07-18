import { getInputValue } from '@/selector/todoSelector';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SUBMIT_INPUT_VALUE, updateInputValue } from './TodoAction';

const ToDoList = () => {
    const inputValue = useSelector(getInputValue)
    const dispatch = useDispatch()
    return <>
    <input value={inputValue} onChange={(e) => {dispatch(updateInputValue(e.target.value))}}></input>
    <button onClick={() => {dispatch()}}>Submit</button>
    </>
}

export default ToDoList;