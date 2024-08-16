import React from 'react'
import {useNavigate} from 'react-router-dom'
import NameDescriptionItem3 from './NameDescriptionItem3'
import {useSelector} from 'react-redux'
import {getNameDescriptionArray} from '../selector/nameDescriptionSelector3'
import {v4} from 'uuid'

const Name3 = () => {
  const nameDescriptionArray = useSelector(getNameDescriptionArray)
  const navigate = useNavigate()
  const onAdd = () => {
    navigate('/add')
  }
  return (
    <div>
      <h1>Name</h1>
      <button onClick={onAdd}>ADD</button>
      <ol>
        {nameDescriptionArray.map((nameDescription, index) => {
          const key = `${v4()}`
          return (
            <NameDescriptionItem3
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

export default Name3
