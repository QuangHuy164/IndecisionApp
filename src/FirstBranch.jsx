import React, {useEffect} from 'react'

const FirstBranch = (props) => {
  useEffect(() => {}, [])

  return (
    <div>
      <h1>{props.test}</h1>
    </div>
  )
}

export default FirstBranch
