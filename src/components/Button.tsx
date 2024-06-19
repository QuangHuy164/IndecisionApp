import React, {useState} from 'react'

const Button = () => {
  const [visibility, setVisibility] = useState(true)
  const press = () => {
    if (visibility === false) {
        setVisibility(true)
    } else {
        setVisibility(false)
    }
  }

  return (
    <div>
        {visibility === true ? <p>something</p> : null}
      
      <button onClick={press}>{visibility === true ? 'Hide' : 'Show'}</button>
    </div>
  )
}

export default Button
