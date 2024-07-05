import React, {useState} from 'react'

interface ToDo {
  index: number
  value: string
  deleteToDo: (index: number) => void
}

const ToDoListsCopy = (props:ToDo) => {
    const onDelete = () => {
        props.deleteToDo(props.index)
    }
    return (
        <li>
        <button onClick={onDelete}></button>
        <p>{props.value}</p>
        </li>
    )
}



const toDoCopy = () => {
  const [todo, setTodo] = useState('')
  const [items, setItems] = useState<string[]>([])

  const addToDo = () => {
    const newItems = []
    for (let i = 0; i < items.length;i++) {
        const item = items[i]
        newItems[i] = item

        newItems.push(todo)
        setItems(newItems)
    }
  }
  const deleteToDo = (index: number) => {
    const newItems2 = []
    for (let i = 0; i < items.length;i++) {
        const item = items[i]
        newItems2[i] = item
    }
    const copyItems1 = newItems2.slice(0,index)
    const copyItems2 = newItems2.slice(index + 1, newItems2.length)
    const copyItems = copyItems1.concat(copyItems2)
    setItems(copyItems)
  }
  return (
    <div>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}>
            <button onClick={addToDo}>Submit</button>
            <ol>
            {items.map((value, index) => {
                return (
                    <ToDoListsCopy 
                    key={index}
                    value={value}
                    index={index}
                    deleteToDo={deleteToDo}
                    />
                )
            })}
        </ol>
      </input>
    </div>
  )
}

export default toDoCopy
