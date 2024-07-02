import React, {useEffect, useState} from 'react'

const UseEffect = () => {
  const [color, setColor] = useState('yellow')

  useEffect(() => {
    setTimeout(() => {
      setColor('pink')
    }, 1000)

    if (color === 'pink') {
      console.log('pink')
    }
  }, [color])

  return <div style={{backgroundColor: color, width: 100, height: 100}}></div>
}

export default UseEffect
