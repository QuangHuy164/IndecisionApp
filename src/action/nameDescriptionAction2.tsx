import { NameDescription } from "../types/nameDescription.types"

export const SAVE_NAME = 'SAVE_NAME'

export const saveNameDescriptionArray = (a: NameDescription[]) => {
    return {
    type: SAVE_NAME,
        payload: a
    }
}

export const DELETE_NAME = 'DELETE_NAME'
export const deleteNameDescriptionArray = (index:number) => {
    return {
        type: DELETE_NAME,
        payload: index
    }
}