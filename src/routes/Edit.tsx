import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Edit = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [value, setValue] = useState('')
  const [item, setItem] = useState('')

  const onSave = () => {
    setItem(`${input} ${value}`)
  }
  const onCancel = () => {
    navigate('/')
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: 200}}>
      <label>Name</label>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
        }}></input>
      <div style={{height: 20}} />
      <label>Description</label>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}></input>
      <div style={{height: 20}} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={onSave}>Save</button>

        <button onClick={onCancel}>Cancel</button>
      </div>
      <p>{item}</p>
    </div>
  )
}

export default Edit
