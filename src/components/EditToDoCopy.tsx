import React, {useEffect, useState} from 'react'

interface EditToDoCopyListItemProps {
  value: string
  index: number
  editToDo: (index: number, value: string) => void
  deleteToDo: (index: number) => void
}

const EditToDoCopyListItem = (props: EditToDoCopyListItemProps) => {
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
    console.log('item at index ', props.index, 'value', props.value)
    setEdit(props.value)
  }, [])
  return (
    <div>
      <input
        value={edit}
        onChange={(e) => {
          setEdit(e.target.value)
        }}></input>
      <button onClick={onEdit}>Edit</button>{' '}
      <button onClick={onDelete}>Delete</button>
      <p>{props.value}</p>
    </div>
  )
}

const EditToDoCopy = () => {
  const [todo, setToDo] = useState('')
  const [lists, setLists] = useState<string[]>([])
  const [newTodo, setNewTodo] = useState('')
  const onSubmit = () => {
    const newList = [...lists]
    newList.push(todo)
    setLists(newList)

    setNewTodo(`${todo}`)
  }
  const editToDo = (itemIndex: number, itemValue: string) => {
    const copyList = [...lists]
    copyList[itemIndex] = itemValue
    setLists(copyList)
  }

  const deleteToDo = (index: number) => {
    // let deleteList = [...lists]
    // for (let i = 0; i < lists.length; i++) {
    //    const list = lists[i]
    //   deleteList[i] = list
    //  }
    const deleteList = lists.filter((itemValue, itemIndex) => {
      return itemIndex !== index
    })

    console.log('deleteToDo deleteList', deleteList)

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
            <EditToDoCopyListItem
              key={`value-${value}-${index}`}
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

export default EditToDoCopy
