import React from 'react'
import {createRoot} from 'react-dom/client'

console.log('App.js is running!')

const cham = {
  title: 'Real',
  subtitle: 'Fake',
  options: ['one', 'two']
}

const template = (
  <div>
    <h1>{cham.title}</h1>
    {cham.subtitle && <p>{cham.subtitle}</p>}
    <p>{cham.options.length > 0 ? 'Here is the subtile' : 'No need'}</p>
    <ol>
      <li>Item One</li>
      <li>Items</li>
    </ol>
  </div>
)

const user = {  
  age: 21, 
}

function getLocation(location) {
  if (location) {
      return Location;
}  else {
  return <p>Location: {location}</p>
}
}

const myName = (
<div>
  <h1>{user.name ? user.name : 'Anonymous'}</h1>
  {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
  {getLocation(user.location)}
</div>
)
const root = createRoot(document.getElementById('app'))

root.render(template)
