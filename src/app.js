import React from 'react'
import {createRoot} from 'react-dom/client'

console.log('App.js is running!')

var cham = {
  title: 'Real',
  subtitle:'Fake',
}

var template = (
<div>
  <h1>{cham.title}</h1>
  <p>{cham.subtitle}</p>
  <ol>
    <li>Item One</li>
    <li>Item Two</li>
  </ol>
</div>
)

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
  {user.age >= 18 && <p>Age: {user.age}</p>}
  {getLocation(user.location)}
</div>
)

// Render your React component instead
const root = createRoot(document.getElementById('app'))

root.render(myName)
