import React, {useState} from 'react'

const OnOffUseEffect = () => {
  const [visibility, setVisibility] = useState(false)

  const toggle = () => {
    if (visibility === false) {
      setVisibility(true) //update a state
    } else {
      setVisibility(false)
    }
  }

  return (
    <>
      <button onClick={toggle}>toggle</button>
      <DisplayText visibility={visibility}  /> 
    </> // visibility is state
  )
}

export default OnOffUseEffect

interface DisplayTextProps {
  visibility: boolean // la property cua visibility
}

const DisplayText = (props: DisplayTextProps) => {
  let text = 'On'
  if (props.visibility === true) {
    text = 'On'
  } else {
    text = 'Off'
  }

  return <p>{text}</p>
}
