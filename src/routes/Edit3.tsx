import {NameDescription3} from '../types/nameDescription3.types'
import {getNameDescriptionArray} from '../selector/nameDescriptionSelector3'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getEditIndex } from '../selector/nameDescriptionSelector3'
import { saveNameDescription } from '../action/nameDescriptionAction3'

const Edit3 = () => {
    const dispatch  = useDispatch()
  const nameDescriptionArray = useSelector(getNameDescriptionArray)
  const editIndex = useSelector(getEditIndex)
  const [nameInput, setNameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const navigate = useNavigate()
  const onEdit = () => {
    navigate('/')
    const newNameDescriptionArray = [...nameDescriptionArray]
    const newItem: NameDescription3 = {
      name: nameInput,
      description: descriptionInput
    }
    newNameDescriptionArray[editIndex] = newItem
    dispatch(saveNameDescription(newNameDescriptionArray))
  }
  const onCancel = () => {
    navigate('/')
  }
  return (
    <div>
      <p>Name</p>
      <input
        value={nameInput}
        onChange={(e) => {
          setNameInput(e.target.value)
        }}
      />
      <p>Description</p>
      <input
        value={descriptionInput}
        onChange={(e) => {
          setDescriptionInput(e.target.value)
        }}
      />
      <button onClick={onEdit}>Edit</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default Edit3
