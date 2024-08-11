import { NameDescription } from '../types/nameDescription.types'
import {deleteNameDescription, editNameDescription} from '../action/nameDescriptionAction'
import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getNameDescriptionArray } from '../selector/nameDescriptionSelector'

interface NameDescriptionProps {
  name: string
  description: string
  index: number
}
const NameDescriptionItem = (props: NameDescriptionProps) => {
  const dispatch = useDispatch()
  const nameDescriptionArray = useSelector(getNameDescriptionArray)
    
  const navigate = useNavigate()
  const [nameInput, setnameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
    
  const onEdit = () => {
     
     const newNameDescriptionArray = [...nameDescriptionArray]
     const nameDescription: NameDescription = {
       name: nameInput,
       description: descriptionInput
     }
     newNameDescriptionArray.push(nameDescription)
     dispatch(editNameDescription(newNameDescriptionArray))
   }
  const onDelete = () => {
    dispatch(deleteNameDescription(props.index))
  }
  return (
    <div style={{backgroundColor: 'lightblue'}}>
      <p>{props.name} </p>
      <p>{props.description}</p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default NameDescriptionItem
