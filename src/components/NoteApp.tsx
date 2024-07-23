import { ToDo } from '@/types/todoReducer.types'
import {connect} from 'react-redux'
import React, {useState} from 'react'
// import { CREATE_TODO_ITEM, updateInputValue } from './TodoAction';

interface ToDoItemProps {
    value:string
    index: number 
}

const NoteApp = (props:ToDoItemProps) => {
    const onDeleteValue = () => {
      const deleteValue = list.filter((value, index) => {
        return value !== value
      })
      setList(deleteValue)
      console.log(deleteValue)
    }
  const [form, setForm] = useState('')
  const [list, setList] = useState<string[]>([])
  const onSubmit = () => {
    
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
      <button onClick={onDeleteValue}>Delete</button>
      <br></br>
      <button onClick={onSubmit}>Submit</button>
      <ol>
        {list.map((value, index) => {
            return (
                <NoteApp
                value={value}
                index={index}
                 />
            )
        })}
      </ol>
    </div>
    
  )
}

export default NoteApp
