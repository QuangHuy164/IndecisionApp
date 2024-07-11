import React, {useEffect, useState} from 'react'

interface EditToDoProps {
  value: string
  index: number
  editLists: (index: number, value: string) => void
}
const EditToDoListsItem = (props: EditToDoProps) => {
  const [edit, setEdit] = useState('')
  const [newEdit, setNewEdit] = useState('')
  const onEdit = () => {
    props.editLists(props.index, edit)

    setNewEdit(`${edit}`)
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
      <p>{props.value}</p>
    </div>
  )
}

const EditToDo = () => {
  const [todo, setTodo] = useState('')
  const [newToDo, setNewToDo] = useState('')
  const [lists, setLists] = useState<string[]>([])

  const editLists = (itemIndex: number, itemValue: string) => {
    const copyList = [...lists]

    // console.log(itemIndex, itemValue)
    copyList[itemIndex] = itemValue
    setLists(copyList) //
  }

  const onSubmit = () => {
    const newLists = [...lists]
    newLists.push(todo)
    setLists(newLists)
    setNewToDo(`${todo}`)
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
        {lists.map((value, index) => {
          return (
            <EditToDoListsItem
              key={index}
              value={value}
              index={index}
              editLists={editLists}
            />
          )
        })}
      </ol>
    </div>
  )
}

export default EditToDo
