import {NameDescription2} from '../types/nameDescription2.type'
import {
  getEditIndex,
  getNameDescriptionArray
} from '../selector/nameDescriptionSelector2'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {saveNameDescriptionArray} from '../action/nameDescriptionAction2'

const Edit2 = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const editIndex = useSelector(getEditIndex)
  const nameDescriptionArray = useSelector(getNameDescriptionArray)
  const [nameInput, setNameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')

  const onEdit = () => {
    navigate('/')
    const newNameDescriptionArray = [...nameDescriptionArray]

    const newItem: NameDescription2 = {
      name: nameInput,
      description: descriptionInput
    }

    newNameDescriptionArray[editIndex] = newItem

    dispatch(saveNameDescriptionArray(newNameDescriptionArray))
  }
  const onCancel = () => {
    navigate('/')
  }
  useEffect(() => {
    setNameInput(nameDescriptionArray[editIndex].name)
    setDescriptionInput(nameDescriptionArray[editIndex].description)
  }, [nameDescriptionArray])
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
      <button onClick={onEdit}>Confirm changes</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default Edit2
