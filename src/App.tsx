import React from 'react'
// import ButtonCopy from './components/ButtonCopy'
// import ChangeName from './components/ChangeName'
//import FillText from './components/FillText'
// import ColorList from './components/ColorList'
// import ColorListCopy from './components/ColorListCopy'
// import UseEffect from './components/UseEffect'
// import OnOffUseEffect from './components/OnOffUseEffect'
//import ToDo from './components/ToDo'
// import ToDoCopy from './components/ToDoCopy'
import EditToDo from './components/EditTodo'
// import EditToDoCopy from './components/EditToDoCopy'
import GoogleClone from './components/GoogleClone'

import Input from './Input/Input'
import ToDoList from './components/ToDoList'


import NoteApp from './components/NoteApp'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Name from './routes/Name'
import Edit from './routes/Edit'
import Add from './routes/Add'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Name />
    //loader: rootLoader,
    // action: Edit,
    // children: [
    //   {
    //     path: '/edit',
    //     element: <Edit />
    //     // loader: nameLoader
    //   }
    // ]
  },
  {
    path: '/edit',
    element: <Edit />
  },
  {
    path:'/add',
    element: <Add />
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Button /> */}
      {/* <ChangeName /> */}
      {/* <FillText /> */}
      {/* <ButtonCopy />
      <ColorList />
      <ColorListCopy />
      <UseEffect />
      <OnOffUseEffect /> */}
      {/* <ToDo /> */}
      {/* <ToDoCopy /> */}
      {/* <EditToDo /> */}
      {/* <EditToDoCopy />  */}
      {/* <GoogleClone /> */}

      {/* <Input /> */}
      {/* <ToDoList /> */}
      {/* <NoteApp value={''} index={0} /> */}
      {/* style={{display: 'flex', width: '100%', height: '100%'}} */}
    </div>
  )
}

export default App
