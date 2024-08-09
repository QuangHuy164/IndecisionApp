import React from 'react'
import {useNavigate} from 'react-router-dom'

import {useDispatch, useSelector} from 'react-redux'
import {getNameDescriptionArray} from '../selector/nameDescriptionSelector'
import NameDescriptionItem from './NameDescriptionItem'
import {v4} from 'uuid'

const Name = () => {
  const nameDescriptionArray = useSelector(getNameDescriptionArray)
  console.log('name.tsx Array', nameDescriptionArray)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const edit = () => {
    navigate('/edit')
  }
  return (
    <div>
      <h1>Name</h1>
      <button onClick={edit}>Add</button>
      <ol style={{width:200, height:100}}>
        {nameDescriptionArray.map((nameDescription,index) => {
          const key = `name-description-list-item-${v4()}`

          console.log(key)

          return (
            <NameDescriptionItem
              key={key}
              name={nameDescription.name}
              description={nameDescription.description}
              index={index}
            />
          )
        })}
      </ol>

      {/* <p>Description</p>
      <button onClick={edit}>Edit</button> <button>Delete</button> */}
    </div>
  )
}

export default Name
