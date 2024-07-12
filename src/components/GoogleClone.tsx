import React, { useState } from 'react'
import './styles.css'

const GoogleClone = () => {
    const [search, setSearch] = useState('')
  return (
    <div>
        <ul>
            <li><a className='active' href='login'>Login</a></li>
        </ul>
    <div className='div'>
        
        <h1 className='h1'>Google</h1>
      <input className='input' value={search} onChange={(e)=>{setSearch(e.target.value)}}></input>
      <button>Search on Google</button> <button className='button2'>See the first page found</button>
      
    </div>
    </div>
  )
}

export default GoogleClone
