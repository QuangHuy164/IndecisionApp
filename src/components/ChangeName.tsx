import React, {useState} from 'react'
//import useState

const ChangeName = () => {
  //arrow function : write a function syntax

  const [names, setNames] = useState<string[]>([])
  // useState Hook, 'name':current state, 'setNames': function updates current state, inside useState is a string

  const change = () => {
    const copyNames = []
    //create an array

    for (let i = 0; i < names.length; i++) {
      //for loop:
      // sets a variable before the loop starts
      // defines the condition for the loop to run
      // increases a value (i++) each time the code block in the loop has been executed

      const name = names[i]
      //declare var name 

      //copyNames.push(name)
      //access an array
      copyNames[i] = name
    }

    copyNames.push('')
    // add new items to the end of an array
    setNames(copyNames)
    //call function
  }
  return (
    // return a value
    <div>
      <ol>
        {names.map((value, index) => {
          //map passing the array
          return <li key={index}>{value}</li>
          // keys help React identify which items have changed, added, removed. 
        })}
      </ol>
      <button className="square" onClick={change}>
        Change My Name
      </button>
    </div>
    //JSX element
  )
}

export default ChangeName
