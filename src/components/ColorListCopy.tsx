import React, {useState} from 'react'

const ColorListCopy = () => {
  const [names, setNames] = useState([1, 2, 3, 4, 5])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  return (
    <>
      <ol>
        {names.map((value, index) => {
          return (
            <NameList
              key={value}
              value={value}
              index={index}
              selectedIndex={selectedIndex}
              updateSelectedIndex={setSelectedIndex}
            />
          )
        })}
      </ol>
    </>
  )
}

export default ColorListCopy

interface NameListProps {
  value: number
  index: number
  selectedIndex: number
  updateSelectedIndex: (v: number) => void
}

const NameList = (props: NameListProps) => {
  const onClick = () => {
    props.updateSelectedIndex(props.index)
  }
  return (
    <li>
      <button
        style={{
          backgroundColor: props.selectedIndex === props.index ? 'red' : 'gray'
        }}
        onClick={onClick}>
        Name {props.value}
      </button>
    </li>
  )
}
