import React, {useState} from 'react'

const Button = () => {
  function getRndInteger(min:number, max:number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  const colors = ['black', 'white', 'purple', 'blue', 'red', 'green']
  const [colorButton, setColor] = useState('red')
  const redColor = () => {
    let rndInteger = getRndInteger(0,5)
    console.log(rndInteger)
    setColor(colors[rndInteger])
  }
  return (
    <div>
      <button style={{backgroundColor: colorButton}} onClick={redColor}>
        Show me
      </button>
    </div>
  )
}

export default Button;