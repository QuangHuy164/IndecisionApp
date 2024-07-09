import React, {useState} from 'react'

interface ToDoCopyProps {
  index: number
  value: string
  deleteToDo: (index: number) => void
}
const ToDoList = (props: ToDoCopyProps) => {
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

const ToDoCopy = () => {
  const [lists, setsLists] = useState('')
  const [items, setItems] = useState<string[]>([])

  const addList = () => {
    // const newItems = []
    // for (let i = 0; i < items.length; i++) {
    //   const item = items[i]

    //   newItems[i] = item
    // }

    const newItems = [...items] //spread operator, instead of For loop

    newItems.push(lists)

    setItems(newItems)
  }
  const deleteToDo = (index: number) => {
    let newItems2 = []

    for (let i = 0; i < items.length; i++) {
      const item2 = items[i]
      newItems2[i] = item2
    }

    // const copyList1 = newItems2.slice(0, index)
    // const copyList2 = newItems2.slice(index + 1, newItems2.length)
    // const copyList = copyList1.concat(copyList2)

    newItems2 = newItems2.filter((value, i) => {

      return i !== index
      
    })

    setItems(newItems2)
  }
  return (
    <div>
      <input
        value={lists}
        onChange={(e) => {
          setsLists(e.target.value)
        }}></input>

      <button onClick={addList}>Submit</button>
      <ol>
        {items.map((value, index) => {
          return (
            <ToDoList
              key={index}
              value={value}
              index={index}
              deleteToDo={deleteToDo}
            />
          )
        })}
      </ol>
    </div>
  )
}

export default ToDoCopy


let array = ['a','b','c','d','e']

let array2 = array.filter((value, index) => {
  return index !== 2
})

console.log('array', array, 'array2', array2)

