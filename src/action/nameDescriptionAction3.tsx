import { NameDescription3 } from "../types/nameDescription3.types"

export const SAVE_NAME_3 = 'SAVE_NAME_3'
export const saveNameDescription = (a: NameDescription3[]) => {
    return {
        type: SAVE_NAME_3,
        payload: a
    }
}

export const DELETE_NAME_3 = 'DELETE_NAME_3'
export const deleteNameDescription = (index: number) => {
    return {
        type: DELETE_NAME_3,
        payload: index
    }
}

export const UPDATE_EDIT_INDEX_3 = 'UPDATE_EDIT_INDEX_3'
export const updateEditIndex = (index:number) => {
    return {
        type: UPDATE_EDIT_INDEX_3,
        payload: index
    }
}