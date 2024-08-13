import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NameDescriptionItem2 = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onEdit = () => {
        navigate('/edit')
    }
    const onCancel = () => {
        
    }
    return <div>
        <p></p>
        <p></p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onCancel}>Cancel</button>
    </div>
}

export default NameDescriptionItem2