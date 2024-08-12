import {NameDescription} from '../types/nameDescription.types'
import {
  deleteNameDescription,
  saveNameDescription,
  updateEditIndex
} from '../action/nameDescriptionAction'
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {getEditIndex, getNameDescriptionArray} from '../selector/nameDescriptionSelector'
import Add from './Add'

interface NameDescriptionProps {
  name: string
  description: string
  index: number
}
const NameDescriptionItem = (props: NameDescriptionProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onEdit = () => {
    navigate('/edit')
    dispatch(updateEditIndex(props.index))
  }

  const onDelete = () => {
    dispatch(deleteNameDescription(props.index))
  }
  return (
    <div style={{backgroundColor: 'lightblue'}}>
      <p>{props.name}</p>
      <p>{props.description}</p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default NameDescriptionItem
