import React, {useState} from 'react'

interface NameListProps {
  value: number
  index: number
  selectedIndex: number
  updateSelectedIndex: (v: number) => void
  newName: number
  updateNewName: (index: number, newName: string) => void
}

const NameList = (props: NameListProps) => {
  const onClick = () => {
    props.updateSelectedIndex(props.index)
    props.updateNewName(props.index,'Huy')
  }

  return (
    <>
      <li>
        <button
          style={{
            backgroundColor:
              props.selectedIndex === props.index ? 'white' : 'gray'
          }}
          onClick={onClick}>
           {props.newName === props.index ? 'Huy' : 'Name'} {props.value}
        </button>
      </li>
    </>
  )
}

const ColorListCopy = () => {
  const [names, setNames] = useState([1, 2, 3, 4, 5])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [newName, setNewName] = useState(-1)

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
              newName={newName}
              updateNewName={setNewName}
            />
          )
        })}
      </ol>
    </>
  )
}

export default ColorListCopy
