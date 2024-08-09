import { deleteNameDescription } from '../action/nameDescriptionAction'
import React from 'react'
import {useDispatch} from 'react-redux'

interface NameDescriptionProps {
  name: string
  description: string
  index:number
}
const NameDescriptionItem = (props: NameDescriptionProps) => {

  const dispatch = useDispatch()
  const onDelete = () => {
    dispatch(deleteNameDescription(props.index))
  }
  return (
    <div style={{backgroundColor: 'lightblue'}}>
      <input value={props.name} />
      <p>{props.description}</p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  )
}

export default NameDescriptionItem
