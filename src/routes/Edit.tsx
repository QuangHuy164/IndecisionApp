import { getEditIndex, getNameDescriptionArray } from '../selector/nameDescriptionSelector'
import { saveNameDescription, updateEditIndex} from '../action/nameDescriptionAction'
import {NameDescription} from '../types/nameDescription.types'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Edit = () => {
  const dispatch = useDispatch()
  const nameDescriptionArray = useSelector(getNameDescriptionArray) // useSelector for getting state that updated from Redux
    const editIndex = useSelector(getEditIndex)
    console.log(editIndex, nameDescriptionArray[editIndex])

  const navigate = useNavigate()
  const [nameInput, setnameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')


  const onSave = () => {
     navigate('/')
    
    const newNameDescriptionArray = [...nameDescriptionArray]
    const newItem: NameDescription = {
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
    <div style={{display: 'flex', flexDirection: 'column', width: 200}}>
      <label>Name</label>
      <input
        value={nameInput}
        onChange={(e) => {
          setnameInput(e.target.value)  
        }}></input>
      <div style={{height: 20}} />
      <label>Description</label>
      <input
        value={descriptionInput}
        onChange={(e) => {
          setDescriptionInput(e.target.value)
        }}></input>
      <div style={{height: 20}} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={onSave}>Confirm</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default Edit
