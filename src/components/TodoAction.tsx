import { ToDoItem } from "@/types/todoReducer.types"

export const UPDATE_TODO_ITEM = 'UPDATE_TODO_ITEM'

export const updateTodoItem = (a:ToDoItem) => {
    return {
        type: UPDATE_TODO_ITEM,
        payload: a
    }
}

export const CREATE_TODO_ITEM = 'CREATE_TODO_ITEM'

export const createTodoItem = (b:ToDoItem) => {
    return {
    type: CREATE_TODO_ITEM,
    payload: b
    }
}

export const DELETE_TODO_ITEM = 'DELETE_TODO_ITEM'

export const deleteTodoItem = (c:ToDoItem) => {
    return {
        type: DELETE_TODO_ITEM,
        payload: c
    }
} 