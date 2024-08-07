import {NameDescription} from '@/types/nameDescription.types'
import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const Edit = () => {
  const [nameDescriptionArray, setNameDescriptionArray] = useState<
    NameDescription[]
  >([])

  const navigate = useNavigate()
  const [nameInput, setnameInput] = useState('')
  const [descriptionInput, setDescriptionInput] = useState('')
  //   const [item, setItem] = useState([])

  const onSave = () => {
    const newNameDescriptionArray = [...nameDescriptionArray]
    const nameDescription: NameDescription = {
      name: nameInput,
      description: descriptionInput
    }
    newNameDescriptionArray.push(nameDescription)
    setNameDescriptionArray(newNameDescriptionArray)
    console.log(newNameDescriptionArray)

    // setItem(`${nameInput} ${descriptionInput}`)
  }
  const onCancel = () => {
    navigate('/')
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', width: 200}}>
      <label>Name</label>
      <input
        value={nameInput}
        onChange={(e) => {
          setnameInput(e.target.value)
        }}></input>
      <div style={{height: 20}} />
      <label>Description</label>
      <input
        value={descriptionInput}
        onChange={(e) => {
          setDescriptionInput(e.target.value)
        }}></input>
      <div style={{height: 20}} />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <button onClick={onSave}>Save</button>

        <button onClick={onCancel}>Cancel</button>
      </div>
      <p></p>
    </div>
  )
}

export default Edit
