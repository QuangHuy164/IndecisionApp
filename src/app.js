import React from 'react'
import {createRoot} from 'react-dom/client'

console.log('App.js is running!')

var user = {
  age: 21, 
}

function getLocation(location) {
  if (location) {
      return Location;
}  else {
  return <p>Location: {location}</p>
}
}

var myName = (
<div>
  <h1>{user.name ? user.name : 'Anonymous'}</h1>
  <p>Age: {user.age}</p>
  {getLocation(user.location)}
</div>
)

// Render your React component instead
const root = createRoot(document.getElementById('app'))

root.render(myName)
