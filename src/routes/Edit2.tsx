import { getNameDescriptionArray } from '../selector/nameDescriptionSelector2'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Edit2 = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const nameDescriptionArray = useSelector(getNameDescriptionArray)
    const onEdit = () => {
        navigate('/')
        const newNameDescriptionArray = [...nameDescriptionArray]
        
    }
    const onCancel = () => {
        navigate('/')
    }
  return (
    <div>
        <p>Name</p>
        <input></input>
        <p>Description</p>
        <input></input>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default Edit2
