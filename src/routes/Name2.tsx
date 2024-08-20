import {getNameDescriptionArray} from '../selector/nameDescriptionSelector2'
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import NameDescriptionItem2 from './NameDescriptionItem2'
import {v4} from 'uuid'

const Name2 = () => {
  const navigate = useNavigate()
  const nameDescriptionArray = useSelector(getNameDescriptionArray)
  const onAdd = () => {
    navigate('/add')
  }
  return (
    <div>
      <h1>Name</h1> 
      <button onClick={onAdd}>ADD</button>
      <ol style={{height:100,width:200}}>
        {nameDescriptionArray.map((nameDescription, index) => {
          const key = `${v4()}`
          return (
            <NameDescriptionItem2
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

export default Name2
