import { deleteNameDescription, updateEditIndex } from "../action/nameDescriptionAction3";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface NameDescriptionProps {
    name: string
    description:string
    index : number
}


const NameDescriptionItem3 = (props: NameDescriptionProps) => {
    const navigate = useNavigate()
const dispatch = useDispatch()
const onEdit = () => {
    navigate('/edit')
    dispatch(updateEditIndex(props.index))
}
const onDelete = () => {
    dispatch(deleteNameDescription(props.index))
}
    return <div>
        <p>{props.name}</p>
        <p>{props.description}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
    </div>
}

export default NameDescriptionItem3