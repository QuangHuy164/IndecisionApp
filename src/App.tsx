import React from 'react'
import ButtonCopy from './components/ButtonCopy'
import ChangeName from './components/ChangeName'
import FillText from './components/FillText'
import ColorList from './components/ColorList'
import ColorListCopy from './components/ColorListCopy'
import UseEffect from './components/UseEffect'
import OnOffUseEffect from './components/OnOffUseEffect'
import ToDo from './components/ToDo'
import ToDoCopy from './components/ToDoCopy'
import EditToDo from './components/EditTodo'
import EditToDoCopy from './components/EditToDoCopy'
import GoogleClone from './components/GoogleClone'

import Input from './Input/Input'
import ToDoList from './components/ToDoList'


import NoteApp from './components/NoteApp'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Name from './routes/Name'
import Edit from './routes/Edit'
import Add from './routes/Add'
import Name1 from './routes/Name1'
import Edit1 from './routes/Edit1'
import Add1 from './routes/Add1'
import Name2 from './routes/Name2'
import Edit2 from './routes/Edit2'
import Add2 from './routes/Add2'
import Name3 from './routes/Name3'
import Edit3 from './routes/Edit3'
import Add3 from './routes/Add3'

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <Name />
  // },
  // {
  //   path: '/',
  //   element: <Name1 />
  // },
  // {
  //   path: '/',
  //   element: <Name2 />
  // },
  {
    path: '/',
    element: <Name3 />
  },
  // {
  //   path: '/edit',
  //   element: <Edit />
  // },
  // {
  //   path: '/edit',
  //   element: <Edit1 />
  // },
  // {
  //   path: '/edit',
  //   element: <Edit2 />
  // },
  {
    path: '/edit',
    element: <Edit3 />
  },
  // {
  //   path:'/add',
  //   element: <Add />
  // },
  // {
  //   path:'/add',
  //   element: <Add1 />
  // },
  // {
  //   path:'/add',
  //   element: <Add2 />
  // },
  {
    path:'/add',
    element: <Add3 />
  },
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
