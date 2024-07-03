import React, {useState} from 'react'

const ToDo = () => {
  const [todo, setTodo] = useState('')
  const [todo1, setTodo1] = useState('')
 

   const [lists, setLists] = useState<string[]>([])
   const Add = () => {
    
     const newLists = []
    for (let i = 0; i < lists.length; i++) {
      const list = lists[i]

      newLists[i] = list
      newLists.push('')
      setLists(newLists)
     }
   }
  return (
    <div>
       
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}>{}</input>
      <button onClick={Add}>Submit</button>
      <p>{todo1}{}</p>
      <ol>
        {lists.map((value, index) => {
          return <li key={index}>{value} </li>
        })}
      </ol> 
    </div>
  )
}

export default ToDo
