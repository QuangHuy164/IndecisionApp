import {
  getNameDescriptionArray
} from '../selector/nameDescriptionSelector1'
import {updateEditIndex} from '../action/nameDescriptionAction'
import {getEditIndex} from '../selector/nameDescriptionSelector'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Edit1 = () => {
  const dispatch = useDispatch()
  const editIndex = useSelector(getEditIndex)
  const nameDescriptionArray = useSelector(getNameDescriptionArray)
  const navigate = useNavigate()
  const [nameInput, setNameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const onEdit = () => {
    navigate('/')
  
  }
  const onCancel = () => {
    navigate('/')
  }
      
  useEffect(() => {
    const nameDescription = nameDescriptionArray[editIndex]
    setDescriptionInput(nameDescription.description)
    setNameInput(nameDescriptionArray[editIndex].name)
  }, [])
  return (
    <div>
      <p>Name</p>
      <input
        value={nameInput}
        onChange={(e) => {
          setNameInput(e.target.value)
        }}
      />
      <button onClick={onEdit}>Edit</button>
      <p>Description</p>
      <input
        value={descriptionInput}
        onChange={(e) => {
          setDescriptionInput(e.target.value)
        }}
      />
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default Edit1
