import React, {useState, useEffect} from 'react'
import EditToDo from './EditTodo'

interface EditToDoListProps {
  value: string
  index: number
  editToDo: (index: number, value: string) => void
  deleteToDo:(index: number) => void
}

const EditToDoListItem = (props: EditToDoListProps) => {
  const [edit, setEdit] = useState('')
  const [newEdit, setNewEdit] = useState('')

  const onEdit = () => {
    props.editToDo(props.index, edit)
    setNewEdit(`${edit}`)
  }
  const onDelete = () => {
        props.deleteToDo(props.index)
  }

  useEffect(() => {
    setEdit(props.value)
  }, [])
  return (
    <div>
      <input
        value={edit}
        onChange={(e) => {
          setEdit(e.target.value)
        }}></input>
      <button onClick={onEdit}>Edit</button> 
      <button onClick={onDelete}>Delete</button>
      <p>{props.value}</p>
    </div>
  )
}

const EditToDoCopy2 = () => {
  const [todo, setToDo] = useState('')
  const [lists, setLists] = useState<string[]>([])
  const onSubmit = () => {
    const copyList = [...lists]
    copyList.push(todo)
    setLists(copyList)
  }
  const editToDo = (itemIndex:number, itemValue:string) => {
    const newEdit = []
    newEdit[itemIndex] = itemValue
    setLists(newEdit)
  }

  const deleteToDo = (itemIndex:number) => {
    const deleteList = lists.filter((value, index) => {
        return itemIndex !== index
    })
    setLists(deleteList)
  }
  return (
    <div>
      <input
        value={todo}
        onChange={(e) => {
          setToDo(e.target.value)
        }}></input>
      <button onClick={onSubmit}>Submit</button>
      <ol>
        {lists.map((value, index) => {
          return (
            <EditToDoListItem
              key={`value - ${value} - ${index}`}
              value={value}
              index={index}
              editToDo={editToDo}
              deleteToDo={deleteToDo}
            />
          )
        })}
      </ol>
    </div>
  )
}

export default EditToDoCopy2
