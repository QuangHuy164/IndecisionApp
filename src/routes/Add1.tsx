import { getNameDescriptionArray} from '../selector/nameDescriptionSelector'
import { saveNameDescription} from '../action/nameDescriptionAction'
import {NameDescription} from '../types/nameDescription.types'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { NameDescription1 } from '@/types/nameDescription1.type'

const Add1 = () => {
  const dispatch = useDispatch()
  const nameDescriptionArray = useSelector(getNameDescriptionArray)
    
  const navigate = useNavigate()
  const [nameInput, setnameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')


  const onSave = () => {
     navigate('/')
    const newNameDescriptionArray = [...nameDescriptionArray]
    const newNameDescription : NameDescription1 = {
      name: nameInput,
      description: descriptionInput
    } 
    newNameDescriptionArray.push(newNameDescription)
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
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default Add1;
