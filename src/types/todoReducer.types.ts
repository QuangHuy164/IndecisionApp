export interface ToDoReducer {
    filter(arg0: (note: any) => boolean): unknown
    inputValue:string
    todoArray: ToDoItem[]
}

export interface ToDoItem {
    id: string
    createdAt: number
    title:string
}

export interface ToDo {
    id:string
    title:string
}
