import React, {useState} from 'react'

const Button = () => {
  const [colorButton, setColor] = useState('red')
  const redColor = () => {
    setColor('red')
  }

  return (
    <div>
      <button onClick={redColor}>
        Show me
      </button>
    </div>
  )
}

export default Button
