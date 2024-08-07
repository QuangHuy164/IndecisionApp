import {ToDoItem} from '@/types/todoReducer.types'
import React, { useEffect, useState} from 'react'
import {v4} from 'uuid'

// import { CREATE_TODO_ITEM, updateInputValue } from './TodoAction';
// const inputValue = useSelector(getInputValue)
// const dispatch = useDispatch()y

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
    // console.log('item at index ', props.index, 'value', props.value)
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

const ToDoList = () => {
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
        // console.log(copyList[i], i, copyList, copyToDo, itemValue)

        const copyItemAtIndexI = {...copyList[i]} 
        copyItemAtIndexI.title = itemValue
        copyList[i] = copyItemAtIndexI
      }

      // console.log('i', i, copyList[i])
    }

    // copyToDo.title = itemValue
    // copyList[itemIndex] = copyToDo
    setLists(copyList)
  }

  const deleteToDo = (index: number) => {
    const deleteList = lists.filter((itemValue, itemIndex) => {
      return itemIndex !== index
    })

    // console.log('deleteToDo deleteList', deleteList)

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
              key={`item-${item.id}`}
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

export default ToDoList
