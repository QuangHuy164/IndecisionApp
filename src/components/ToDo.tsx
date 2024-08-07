import React, {useState} from 'react'

interface ItemsProps {
  index: number
  value: string
  deleteToDo: (index: number) => void
}

const ToDoList = (props: ItemsProps) => {
  const onDelete = () => {
    props.deleteToDo(props.index)
  }
  return (
    <li>
      <p>{props.value}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  )
}

const ToDo = () => {
  const [todo, setTodo] = useState('')

  const [lists, setLists] = useState<string[]>([])

  const AddToDo = () => {
    const newLists = [] //create an array

    for (let i = 0; i < lists.length; i++) {
      const list = lists[i] // gan gia tri [i] vao state lists, declare new variable and assign to list[i]

      newLists[i] = list // assign variable just created with a copy of array newLists
    }

    newLists.push(todo)

    setLists(newLists)
  }

  const deleteToDo = (index: number) => {
    // function to delete an item of array
    //console.log('delete', index)
    const copyList = []

    for (let i = 0; i < lists.length; i++) {
      const list2 = lists[i]

      copyList[i] = list2
    }

    const copyList1 = copyList.slice(0, index) // array.slice(start, end) return a copy of an array, start position is 0, initial array is empty -> end is index. First part of array

    const copyList2 = copyList.slice(index + 1, copyList.length) // second part of array. Start with the index + 1, end is the length of the array

    const copyList3 = copyList1.concat(copyList2) // array.concat(array1,array2,...) combines 2 or more arrays and return

    setLists(copyList3)
  }

  return (
    <div>
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}></input>

      <button onClick={AddToDo}>Submit</button>

      <ol>
        {lists.map((value, index) => {
          return (
            // return property on this one
            <ToDoList
              key={index} // key must be unique
              index={index}
              value={value}
              deleteToDo={deleteToDo}
            />
          )
        })}
      </ol>
    </div>
  )
}

export default ToDo
