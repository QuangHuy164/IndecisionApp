import React, {useState} from 'react'

const ToDoListCopy = () => {
    const onDelete = () => {
        
    }
  const [form, setForm] = useState('')
  const [list, setList] = useState<string[]>([])
  const onSubmit = () => {
    const newList = [...list]
    list
  }
  return (
    <div>
      <p>Note</p>
      <input
        placeholder="Name"
        value={form}
        onChange={(e) => {
          setForm(e.target.value)
        }}
      />
      <button onClick={onDelete}>Delete</button>
      <br></br>
      <button onClick={onSubmit}>Submit</button>
      <ol>
        {}
      </ol>
    </div>
    
  )
}

export default ToDoListCopy
