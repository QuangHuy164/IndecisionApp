import {NameDescription} from '../types/nameDescription.types'

export const SAVE_NAME_2 = 'SAVE_NAME_2'

export const saveNameDescriptionArray = (a: NameDescription[]) => {
  return {
    type: SAVE_NAME_2,
    payload: a
  }
}

export const DELETE_NAME_2 = 'DELETE_NAME_2'
export const deleteNameDescriptionArray = (index: number) => {
  return {
    type: DELETE_NAME_2,
    payload: index
  }
}

export const UPDATE_EDIT_INDEX_2 = 'UPDATE_EDIT_INDEX_2'
export const updateEditIndex = (index: number) => {
  return {
    type: UPDATE_EDIT_INDEX_2,
    payload: index
  }
}
