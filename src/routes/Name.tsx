import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

const Name = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const edit = () => {
    navigate('/edit')
  }
  return (
    <div>
      <h1>Name</h1>
      {/* <p>Description</p>
      <button onClick={edit}>Edit</button> <button>Delete</button> */}
      <button onClick={edit}>Add</button>
    </div>
  )
}

export default Name
