import React from 'react'
import {useNavigate} from 'react-router-dom'
import NameDescriptionItem from './NameDescriptionItem1'
import {v4} from 'uuid'
import {useSelector} from 'react-redux'
import {
  getEditIndex,
  getNameDescriptionArray
} from '../selector/nameDescriptionSelector'

const Name1 = () => {
  const nameDescriptionArray = useSelector(getNameDescriptionArray)
  const editIndex = useSelector(getEditIndex)
  const navigate = useNavigate()
  const onAdd = () => {
    navigate('/add')
  }
  return (
    <div>
      <h1>Name</h1>
      <button onClick={onAdd}>Add</button>
      <ol>
        {nameDescriptionArray.map((nameDescription, index) => {
          const key = `${v4()}`

          return (
            <NameDescriptionItem
              key={key}
              index={index}
              name={nameDescription.name}
              description={nameDescription.description}
            />
          )
        })}
      </ol>
    </div>
  )
}

export default Name1
