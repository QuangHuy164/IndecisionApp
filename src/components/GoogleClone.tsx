import React, {useState} from 'react'
import './styles.css'

const GoogleClone = () => {
  const [search, setSearch] = useState('')
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          height: '100%'
        }}>
        <ul>
          <li>
            <a className="active" href="#login">
              Login
            </a>
          </li>
          <li>
            <a href="gmail">Gmail</a>
          </li>
          <li>
            <a href="image">Image</a>
          </li>
          <li>
            <a href="gApp">Google Apps</a>
          </li>
        </ul>

        <div className="container">
          <h1 className="h1">Google</h1>
          <input
            className="input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}></input>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <button>Search on Google</button>
            <div style={{marginRight: '16px'}}></div>

            <button className="button2">See the first page found</button>
          </div>
          <div style={{display: 'flex'}}>
            <p>Google has languages:</p>
            <p style={{textDecoration: 'underline', color: 'blue'}}>Spanish</p>
            <p style={{textDecoration: 'underline', color: 'blue'}}>English</p>
          </div>
        </div>

        <div style={{backgroundColor: '#dadce0',flexDirection:'row',display:'flex'}}>
          <p>Information</p>
          <p>Advertisements</p>
          <p>Companies</p>
          <p>This is how Haku works</p>
          <p>Settings</p>
          <p>Settings</p>
          <p>Settings</p>
        </div>
      </div>
    </>
  )
}

export default GoogleClone
