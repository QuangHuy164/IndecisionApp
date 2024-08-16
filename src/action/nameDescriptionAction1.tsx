import {NameDescription} from '../types/nameDescription.types'

export const SAVE_NAME_1 = 'SAVE_NAME_1'
export const saveNameDescription = (a: NameDescription[]) => {
  return {
    type: SAVE_NAME_1,
    payload: a
  }
}

export const DELETE_NAME_1 = 'DELETE_NAME_1'
export const deleteNameDescription = (index: number) => {
  return {
    type: DELETE_NAME_1,
    payload: index
  }
}

export const UPDATE_EDIT_INDEX_1 = 'UPDATE_EDIT_INDEX_1'
export const updateEditIndex = (index: number) => {
  return {
    type: UPDATE_EDIT_INDEX_1,
    payload: index
  }
}
