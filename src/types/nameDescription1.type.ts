import { V4Options } from "uuid"

export interface NameDescriptionReducer1 {
    nameDescriptionArray: NameDescription1[],
    editIndex: number
}

export interface NameDescription1 {
    name: string
    description: string
}