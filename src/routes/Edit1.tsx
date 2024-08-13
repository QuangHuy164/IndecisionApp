import {saveNameDescription} from '@/action/nameDescriptionAction'
import {getEditIndex, getNameDescriptionArray} from '@/selector/nameDescriptionSelector'
import {NameDescription1} from '@/types/nameDescription1.type'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const Edit1 = () => {
  const dispatch = useDispatch()
  const nameDescriptionArray = useSelector(getNameDescriptionArray)
  const editIndex = useSelector(getEditIndex)
  const navigate = useNavigate()
  const [nameInput, setnameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  const onEdit = () => {
    navigate('/')
    const newNameDescriptionArray = [...nameDescriptionArray]
    const nameDescription: NameDescription1 = {
      name: nameInput,
      description: descriptionInput
    }
    newNameDescriptionArray.push(nameDescription)
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
          setnameInput(e.target.value)
        }}></input>
      <button onClick={onEdit}>Edit</button>
      <p>Description</p>
      <input
        value={descriptionInput}
        onChange={(e) => {
          setDescriptionInput(e.target.value)
        }}></input>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default Edit1
