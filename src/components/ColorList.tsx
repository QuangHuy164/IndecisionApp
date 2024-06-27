/**
 * - Render list co 10 items, moi item co box, bgr color default la grey. Moi lan an selected item thi se co bgr color la red
 * Props
 */

import React, {useState} from 'react'

const ColorList = () => {
  const [color, setColor] = useState([1, 2, 3, 4, 5]) 
  const [selectedIndex, setSelectedIndex] = useState(-1) // the value -1 indicates that no element is selected

  return (  
    <>
      <ol>
        {color.map((value, index) => { // 
          return (
            <ColorListItem // import component ColorListItem
              key={index} // key dung de biet dc value nao thay doi trong state
              value={value} // value= la variable value trong map(), {value} la property cua ColorlistitemProps 
              index={index} // index= la variable index, {index} la property cua ColorlistitemProps 
              selectedIndex={selectedIndex} // selectedIndex la initial state, {selectedIndex} la property dc call trong ColorlistitemProps
              updateSelectedIndex={setSelectedIndex} // updateSelectedIndex duoc call trong ColorlistitemProps, {setSelectedIndex} la function property
            />
          )
        })}
      </ol>
    </>
  )
}

export default ColorList

// interface syntax. Dung de call Property 
interface ColorListItemProps {
  //property: type of property
  value: number 
  index: number
  selectedIndex: number
  updateSelectedIndex: (v: number) => void // call 1 function o trong property
}

const ColorListItem = (props: ColorListItemProps) => {  
  const onClick = () => { 
    props.updateSelectedIndex(props.index) // call function cua Colorproperty and passing 
  }

  //   if (props.selectedIndex === props.index ) {
  //         return <li>
  //         <button onClick={onClick} style={{backgroundColor: 'red'}}>
  //           Item {props.value}
  //         </button>
  //       </li>
  //   } else {
  //     return (
  //         <li>
  //           <button onClick={onClick} style={{backgroundColor: 'gray'}}>
  //             Item {props.value}
  //           </button>
  //         </li>
  //       )
  //   }

  //   let color = undefined
  //   if (props.selectedIndex === props.index) {
  //     color = 'red'
  //   } else {
  //     color = 'gray'
  //   }

  return (
    <li>
      <button
        onClick={onClick}
        style={{
          backgroundColor: props.selectedIndex === props.index ? 'red' : 'gray' //inline conditional syntax: condition ? exprIfTrue : exprIfFalse
        }}>
        Item {props.value}
      </button>
    </li>
  )
}
