import {ToDoItem} from '@/types/todoReducer.types'
import React, {useEffect, useState} from 'react'
import {v4} from 'uuid'

interface ToDoListItemProps {
  item: ToDoItem
  index: number
  editToDo: (index: number, value: string) => void
  deleteToDo: (index: number) => void
}

const ToDoListItem = (props: ToDoListItemProps) => {
  const [edit, setEdit] = useState('')

  const onEdit = () => {
    props.editToDo(props.index, edit)
  }

  const onDelete = () => {
    props.deleteToDo(props.index)
  }

  useEffect(() => {
    setEdit(props.item.title)
  }, [props.item.title])

  return (
    <div>
      <input
        value={edit}
        onChange={(e) => {
          setEdit(e.target.value)
        }}></input>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      <p>Created at {`${new Date(props.item.createdAt)}`}</p>
      <p>Title : {props.item.title}</p>
    </div>
  )
}

const NoteApp = () => {
  const [todo, setToDo] = useState('')
  const [lists, setLists] = useState<ToDoItem[]>([])

  const onSubmit = () => {
    const newList = [...lists]
    const newTodo: ToDoItem = {
      createdAt: new Date().getTime(),
      id: v4(),
      title: todo
    }

    newList.push(newTodo)
    setLists(newList)
  }

  const editToDo = (itemIndex: number, itemValue: string) => {
    const copyList = [...lists]
    const copyToDo = {...copyList[itemIndex]}

     for (let i = 0; i < copyList.length; i++) { 
     if (copyToDo.title === copyList[i].title) {
        const copyItemAtIndexI = {...copyList[i]} // spread operator to copy properties of todo item  
        copyItemAtIndexI.title = itemValue // update 'title' props at copyItemAtIndexI to new value: string 'itemValue'
       copyList[i] = copyItemAtIndexI //replace todoItem at index i in copylist with the updated object 'copyItemAtIndexI'

    // for (let i = 0; i < copyList.length;i++) {
    //   if ( copyToDo.title === copyList[i].title) {
    //     const copyItemAtIndexI = {...copyList[i]}
    //     const copyItemAtIndexI.title = itemValue
    //     copyList[i] = copyItemAtIndexI
    
  
      }
    }
    setLists(copyList)
  }

  const deleteToDo = (index: number) => {
    const deleteList = lists.filter((itemValue, itemIndex) => {
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
        {lists.map((item, index) => {
          return (
            <ToDoListItem
              key={`iem-${item.id}`}
              item={item}
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

export default NoteApp
