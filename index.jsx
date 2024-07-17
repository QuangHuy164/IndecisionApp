// import React from 'react'
// import {createRoot} from 'react-dom/client'
// import './src/playground/es6-arrow-function'
// import {renderToggle} from './src/playground/build-it'
// import './src/playground/es6-classes-1.js'

// const app = {
//   title: 'Indecision App',
//   subtitle: 'Put your hands on computer',
//   options: []
// }

// const onFormSubmit = (e) => {
//   e.preventDefault()

//   const option = e.target.elements.option.value

//   if (option) {
//     app.options.push(option)
//     e.target.elements.option.value = ''
//     render()
//   }
// }

// const removeLast = () => {
//   app.options.pop()
//   render()
// }

// const removeAll = () => {
//   // app.title = 'Application'
//   app.options = []
//   render()
// }

// const random = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length)
//   const option = app.options[randomNum]
//   alert(option)
// }

// const root = createRoot(document.getElementById('app'))

// let visibility = false

// const toggleVision = () => {
//   // visibility = !visibility

//   if(visibility === true) {
//     visibility = false
//   } else {
//     visibility = true
//   }

//   render()
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>{app.title}</h1>
//       {app.subtitle && <p>{app.subtitle}</p>}
//       <p>{app.options.length > 0 ? 'Here are the options' : 'No needddd'} </p>
//       <p>{app.options.length}</p>
//       <ol>
//         <button disabled={app.options.length === 0} onClick={random}>
//           Random
//         </button>
//         <button onClick={removeLast}>Remove Last</button>
//         <button onClick={removeAll}>Remove All</button>

//         {app.options.map((option) => {
//           return <li key={option}>{option}</li>
//         })}
//       </ol>
//       <form onSubmit={onFormSubmit}>
//         <input type="text" name="option"></input>
//         <button>Add Option</button>
//       </form>

//       {renderToggle(visibility, toggleVision)}

//       {/* <div>
//         <h1>Toggle Vision</h1>
//         <button onClick={toggleVision}>
//           {visibility ? 'Hide Details' : 'Show Details'}
//         </button>
//         {visibility && (
//           <div>
//             <p>Here is something appear</p>
//           </div>
//         )}
//       </div> */}
//     </div>
//   )
//   root.render(template)
// }

// render()

import React from 'react'
import {createRoot} from 'react-dom/client'
import App, {a} from './src/App'
import store from './src/components/store'
import {Provider} from 'react-redux'

// Render your React component instead
const root = createRoot(document.getElementById('app'))
root.render(
  <Provider store={store}>
    <App  />
  </Provider>
)
