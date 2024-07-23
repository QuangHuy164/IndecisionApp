import { ToDoItem, ToDoReducer } from "@/types/todoReducer.types"

export const UPDATE_NOTE = 'UPDATE_NOTE'

export const updateTodoItem = (note:ToDoReducer) => {
    return {
        type: UPDATE_NOTE,
        payload: note
    }
}

export const ADD_NOTE = 'ADD_NOTE'

export const addToDoItem = (note:ToDoReducer) => {
    return {
    type: ADD_NOTE,
    payload:note
    }
}

export const DELETE_NOTE = 'DELETE_NOTE'

export const deleteTodoItem = (id:ToDoItem) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
} 

