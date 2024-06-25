import React, {useState} from 'react'

const FillText = () => {
    const [firstName, setFirstName] = useState('')
    const [ lastName, setLastName] = useState('')
    const fill = () => {
       
       
    }
    return <div>
        <p>First Name</p>
        <input placeholder='Enter text' value={firstName} onChange={ (e) => {setFirstName(e.target.value) } } />
        <p>Last Name</p>
        <input placeholder='Enter text' value={lastName} onChange={ (e) => {setLastName(e.target.value) } } /> 
        <br />
        <button type='submit' onClick={fill}>Submit</button>
    </div>
}

export default FillText;