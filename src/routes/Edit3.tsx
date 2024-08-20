import {NameDescription3} from '../types/nameDescription3.types'
import {getNameDescriptionArray} from '../selector/nameDescriptionSelector3'
import { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { getEditIndex } from '../selector/nameDescriptionSelector3'
import { saveNameDescription } from '../action/nameDescriptionAction3'
import React from 'react'

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

  useEffect(()=> {
    setNameInput(nameDescriptionArray[editIndex].name),
    setDescriptionInput(nameDescriptionArray[editIndex].description)
  }, [])

  return (
    <div style={{display:'flex', flexDirection:'column', width:200}}>
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
      <div style={{height:20}}/>
      <div style={{display:'flex', justifyContent:'space-between'}}>
      <button onClick={onEdit}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default Edit3
