import React from 'react'
import ButtonCopy from './components/ButtonCopy'
import ChangeName from './components/ChangeName'
import FillText from './components/FillText'
import ColorList from './components/ColorList'
import ColorListCopy from './components/ColorListCopy'
import UseEffect from './components/UseEffect'
import OnOffUseEffect from './components/OnOffUseEffect'

const App = () => {
  return (
    <div>
      {/* <Button /> */}
      <ChangeName />
      <FillText />
      <ButtonCopy />
      <ColorList />
      <ColorListCopy />
      <UseEffect />
      <OnOffUseEffect />
    </div>
  )
}

export default App
