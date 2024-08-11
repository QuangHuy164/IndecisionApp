import React from 'react'
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const navigate = useNavigate()
    const onSave = () => {
        navigate('/edit')

    }
    const onCancel = () => {
        navigate('/')
    }
    return <div>
        <p>Name 2</p>
        <input></input>
        <p>Description 2</p>
        <input></input>
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
    </div>
}   

export default Add;