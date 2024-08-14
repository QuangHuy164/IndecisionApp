import { getInputValue } from '../selector/nameDescriptionSelector1'
import {updateEditIndex} from '../action/nameDescriptionAction'
import {getEditIndex} from '../selector/nameDescriptionSelector'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { updateInputValue } from '../action/nameDescriptionAction1'


const Edit1 = () => {
  const dispatch = useDispatch()
  const editIndex = useSelector(getEditIndex)
  const navigate = useNavigate()
  const inputValue = useSelector(getInputValue)
  const [descriptionInput, setDescriptionInput] = useState('')
  const onEdit = () => {
    navigate('/')
    dispatch(updateInputValue(inputValue))
  }
  const onCancel = () => {
    navigate('/')
  }
  return (
    <div>
      <p>Name</p>
      <input
        value={inputValue}
        onChange={(e) => {
          dispatch(updateInputValue(e.target.value)
  )}} />
      <button onClick={onEdit}>Edit</button>
      <p>Description</p>
      <input
        value={descriptionInput}
        onChange={(e) => {
          setDescriptionInput(e.target.value)
        }} />
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default Edit1
