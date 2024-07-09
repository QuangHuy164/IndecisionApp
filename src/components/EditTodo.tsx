import React, {useState} from 'react'

interface EditToDoProps {
    value:string
    index:number
    editLists:(index:number) => void
}
const EditToDoListsItems = (props:EditToDoProps) => {
    const [edit, setEdit ] = useState('')
    const onEdit = () => {
        props.editLists(props.index)
    }
    return <div>
        <input value={props.value} onChange={(e) => {setEdit(e.target.value)}}></input>
        <button onClick={onEdit}>Edit</button>
    </div>
}

const editLists = () => {
    return 
}
 

const EditToDo = () => {
  const [todo, setTodo] = useState('')
  const [lists, setLists ] = useState<string[]>([])
  const onSubmit = () => {
    const newLists = [...lists]
    newLists.push(todo)
    setLists(newLists)
  }
  return (
    <div>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}></input>
        <button onClick={onSubmit}>Submit</button>
        <ol>
        {lists.map((value,index) => {
            return <EditToDoListsItems 
            key={index}
            value={value}
            index={index}
            editLists={editLists}
            />
        })}
        </ol>
    </div>
  )
}

export default EditToDo
