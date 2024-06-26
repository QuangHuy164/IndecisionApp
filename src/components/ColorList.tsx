/**
 * - Render list co 10 items, moi item co box, bgr color default la grey. Moi lan an selected item thi se co bgr color la red
 * Props
 */

import React, {useState} from 'react'

const ColorList = () => {
  const [color, setColor] = useState([1, 2, 3, 4, 5])
  const [selectedIndex, setSelectedIndex] = useState(-1)

  return (
    <>
      <ol>
        {color.map((value, index) => {
          return (
            <ColorListItem
              key={index}
              value={value}
              index={index}
              selectedIndex={selectedIndex}
              updateSelectedIndex={setSelectedIndex}
            />
          )
        })}
      </ol>
      <button>Gray Button</button>
    </>
  )
}

export default ColorList

interface ColorListItemProps {
  value: number
  index: number
  selectedIndex: number
  updateSelectedIndex: (v: number) => void
}

const ColorListItem = (props: ColorListItemProps) => {
  const onClick = () => {
    props.updateSelectedIndex(props.index)
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
          backgroundColor: props.selectedIndex === props.index ? 'red' : 'gray'
        }}>
        Item {props.value}
      </button>
    </li>
  )
}
