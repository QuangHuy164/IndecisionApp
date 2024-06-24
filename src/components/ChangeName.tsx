import React, {useState} from 'react'
//import useState 
const ChangeName = () => {
    //arrow function : write a function syntax 
  const [names, setNames] = useState<string[]>(['0', '1', '2']) 
  // useState Hook, 'name':current state, 'setNames': function updates current state, inside 
  const change = () => {
    const copyNames = []
    
    for (let i = 0; i < names.length; i++) {
    //for loop: 
    // sets a variable before the loop starts
    // defines the condition for the loop to run
    // increases a value (i++) each time the code block in the loop has been executed

      const name = names[i]

      copyNames.push(name)
    //   copyNames[i] = name
    }

    copyNames.push('') 
    setNames(copyNames)
  }
  return (
    // return a value
    <div>
      <ol>
        {names.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ol>

      <button className='square' onClick={change}>Change My Name</button>
    </div>
    //JSX element
  )
}

export default ChangeName
