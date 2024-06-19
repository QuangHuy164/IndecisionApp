import React from 'react'

export const renderToggle = (visibility, toggleVision) => {
  const toggle = (
    <div>
      <h1>Toggle Vision</h1>
      <button onClick={toggleVision}>

        {visibility === true ? 'Hide Details' : 'Show Details'}

      </button>

      {visibility === true ? (
        <div>
          <p>Here is something appear</p>
        </div>
      ) : null}
    </div>
  )
  return toggle
}
